import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { ModalService } from '../services/modal.service';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UploadTypes } from '../services/models';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.less']
})
export class AddPhotoComponent extends AddService implements OnInit {
  goods = [];
  constructor(private as:AdminService, private ms:ModalService, private ss:SatogaService, private ls:LoadService) { 
    super();
    this.addForm = this.fb.group({
      Name: ['', Validators.required],
      GoodId: [''],
      Photo: ['', [Validators.required, Validators.pattern(this.ipattern)]]
    });
  }

  ngOnInit() {
    this.ss.getGoods().subscribe(x => {
      this.goods = x;
      if(this.item){
        this.addForm.patchValue(this.item);
      }
    })
    
  }

  send(){
    
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    if(!this.item){
      this.ls.showLoad = true;
      this.ls.load = 0;
      this.as.addItem(this.v, UploadTypes.Photo).subscribe(x => {
        let p = Object.assign({Id:x},this.v);
        Object.keys(this.files).filter(file => !!this.files[file]).forEach(f => {
          let formData = new FormData();
          formData.append('Data', this.files[f]);
          this.as.UploadFile(x, UploadTypes.Photo, formData, f).subscribe(event=>{
            if(event.type == HttpEventType.UploadProgress){
              this.ls.load = Math.round(event.loaded/event.total * 100);
              
            }
            else if(event.type == HttpEventType.Response){
              this.ls.showLoad = false;
              this.submitted = false;
              p.Photo = event.body[0];
              
              this.items.unshift(p);
              this.ms.close();
            }
            
          })
        })
      })
    }else{
      let keys = Object.keys(this.files).filter(file => !!this.files[file]);
      let k = keys.length;
      if(Object.keys(this.update).length>0){
        this.update['Id']=this.item.Id;
        console.log(this.update);
        this.as.updateItem(this.update, UploadTypes.Photo).subscribe(x => {
          this.update = {};
          if(k==0){
            this.ls.showLoad = false;
            this.submitted = false;
            this.ngOnInit();
          }
        })
      }
      keys.forEach(f => {
        let formData = new FormData();
        formData.append('Data', this.files[f]);
        this.as.UploadFile(this.item.Id, UploadTypes.Photo, formData, f).subscribe(event=>{
          if(event.type == HttpEventType.UploadProgress){
            this.ls.load = Math.round(event.loaded/event.total * 100);
            
          }
          else if(event.type == HttpEventType.Response){
            k--;
            if(k==0 && Object.keys(this.update).length==0){
              this.item.Photo = event.body[0];
              this.ls.showLoad = false;
              this.submitted = false;
              this.files = {};
            }
            
            
          }
          
        })
      })
    }
    
  }

}
