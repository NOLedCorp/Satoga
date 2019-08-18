import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { AdminService } from '../services/admin.service';
import { ModalService } from '../services/modal.service';
import { LoadService } from '../services/load.service';
import { Validators } from '@angular/forms';
import { UploadTypes } from '../services/models';
import { HttpEventType } from '@angular/common/http';
import { SatogaService } from '../services/satoga.service';
import { isBoolean } from 'util';
import { tap } from 'rxjs/internal/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent extends AddService implements OnInit {
  sections = [];
  manyFiles = []
  constructor(private as:AdminService, private ms:ModalService, private ss:SatogaService, private ls:LoadService) { 
    super();
  }

  ngOnInit() {
    this.ss.getSections().subscribe(x => {
      this.sections = x;
    })
    this.addForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      SectionId: ['', Validators.required],
      FullDescription: [''],
      Photo: ['', [Validators.required, Validators.pattern(this.ipattern)]],
      InStock: [''],
      Price: ['', Validators.required],
      Main: [''],
    });

    if(this.item){
      this.addForm.patchValue(this.item);
    }
    
  }
  setGalleryItem(e, item){
    if(isBoolean(e)){
      item['Gallery']=e;
    }else{
      item['Gallery']=e.target.checked;
    }
    this.updArray('changed',[]);
    
  }
  send(){
    
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    this.ls.showLoad = true;
    //добавляем дополнительные фотографии в объект продукта
    let product = this.v;
    product.Photoes = this.manyFiles.map(x => {
      return {Name:this.v.Name, GoodId:0, Photo:'', Gallery:x.Gallery}
    });

    //загружаем основную информацию изделия
    this.as.addProduct(product).subscribe(productIds => {
      console.log(productIds);
      let filesSubs = [];

      //подписываемся на загрузку изображения изделия
      Object.keys(this.files).filter(file => !!this.files[file]).forEach(f => {
        const formData = new FormData();
        formData.append('Data', this.files[f]);
        filesSubs.push(this.as.UploadFile(productIds[0], UploadTypes.Product, formData))
      })

      //подписываемся на загрузку доп. фотографий
      for(let i = 0; i<productIds.length-1; i++){
        const formData = new FormData();
        formData.append('Data', this.manyFiles[i]);
        filesSubs.push(this.as.UploadFile(productIds[i+1], UploadTypes.Photo, formData));
      }

      //загружаем файлы
      forkJoin(filesSubs).subscribe(
        success => {
          this.ls.showLoad = false;
        }
      )
    })
  }


  addPhoto(event){
    for(let i =0; i< event.target.files.length; i++){
      this.manyFiles.push(event.target.files[i]);
    }
    this.updArray('files', this.manyFiles);
  }

  removeFile(i){
    this.manyFiles.splice(i,1);
    this.updArray('files', this.manyFiles);
  }

}
