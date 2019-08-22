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

  /**
   * Устанавливает флажок добавления в галерею
   * @param e событие
   * @param item элемент
   */
  setGalleryItem(e, item){
    if(isBoolean(e)){
      item['Gallery']=e;
      if(!this.update['changed']){
        this.updArray('changed', []);
      }
      this.update['changed'].push(item);
    }else{
      item['Gallery']=e.target.checked;
    }

    
  }
  send(){
    
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    
    this.ls.showLoad = true;
    if(this.item){
      if(Object.keys(this.update).length){
        this.update['Id']=this.item.Id;
      }
      
      this.doUpdate();
    }else{
      this.add();
    }
  }

  add(){
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

  doUpdate(){
    let remove = this.update['removeFiles']?JSON.parse(JSON.stringify(this.update['removeFiles'])):[];
    let changed = this.update['changed']?JSON.parse(JSON.stringify(this.update['changed'])):[];

    delete this.update['removeFiles'];
    delete this.update['files'];
    delete this.update['changed'];
    let subs = [];
    
    subs.push(
      ...[
        this.as.addPhotoes(this.manyFiles.map(x => {
          return {Name:this.v.Name, GoodId:this.item.Id, Photo:'', Gallery:x.Gallery}
        })),
        this.as.removeItems(remove, UploadTypes.Photo)
        
      ],
      ...changed.map(x => {
        return this.as.updateItem({Id: x.Id, Name: x.Name, GoodId:x.GoodId, Photo: x.Photo, Gallery:x.Gallery?1:0}, UploadTypes.Photo)
      })
    );
      console.log(Object.keys(this.update))
    if(Object.keys(this.update).length>1){
      subs.push(this.as.updateItem(this.update, UploadTypes.Product));
    }
    Object.keys(this.files).filter(file => !!this.files[file]).forEach(f => {
      const formData = new FormData();
      formData.append('Data', this.files[f]);
      subs.push(this.as.UploadFile(this.item.Id, UploadTypes.Product, formData))
    })

    forkJoin(subs).subscribe(result => {
      console.log(result);
      let fileSubs = [];
      if(!result[0].length){
        this.ls.showLoad = false;
      }
      for(let i = 0; i<result[0].length; i++){
        const formData = new FormData();
        formData.append('Data', this.manyFiles[i]);
        fileSubs.push(this.as.UploadFile(result[0][i], UploadTypes.Photo, formData));
      }

      forkJoin(fileSubs).subscribe(
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
    console.log(this.manyFiles);
  }

  removeFile(i, files = this.manyFiles){
    
    let file = Object.assign({},files.slice(i,i+1)[0]);
    files.splice(i,1);
    console.log(file);
    if(file.Photo){
      if(!this.update['removeFiles']){
        this.updArray('removeFiles', []);
      }
      this.update['removeFiles'].push(file);
    }else{
      this.updArray('files', files)
    }
    
    
  }

}
