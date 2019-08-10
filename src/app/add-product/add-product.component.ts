import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { AdminService } from '../services/admin.service';
import { ModalService } from '../services/modal.service';
import { LoadService } from '../services/load.service';
import { Validators } from '@angular/forms';
import { UploadTypes } from '../services/models';
import { HttpEventType } from '@angular/common/http';
import { SatogaService } from '../services/satoga.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent extends AddService implements OnInit {
  sections = [];
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
  send(){
    
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    
    if(!this.item){
      this.ls.showLoad = true;
      this.ls.load = 0;
      this.as.addItem(this.v, UploadTypes.Product).subscribe(x => {
        Object.keys(this.files).filter(file => !!this.files[file]).forEach(f => {
          let formData = new FormData();
          formData.append('Data', this.files[f]);
          this.as.UploadFile(x, UploadTypes.Product, formData).subscribe(event=>{
            if(event.type == HttpEventType.UploadProgress){
              this.ls.load = Math.round(event.loaded/event.total * 100);
              
            }
            else if(event.type == HttpEventType.Response){
              
              this.ls.showLoad = false;
              this.submitted = false;
              let res = Object.assign({Id:x},this.v);
              res['Photo'] = event.body;
              this.items.unshift(res);
            }
            
          })
        })
      })
    }else{
      let keys = Object.keys(this.files).filter(file => !!this.files[file]);
      let k = keys.length;
      if(Object.keys(this.update).length>0){
        this.update['Id']=this.item.Id;
        this.as.updateItem(this.update, UploadTypes.Product).subscribe(x => {
          if(k==0){
            this.ls.showLoad = false;
            this.submitted = false;
            this.item = Object.assign(this.item, this.update);
            this.update = {};
          }
        })
      }
      keys.forEach(f => {
        let formData = new FormData();
        formData.append('Data', this.files[f]);
        this.as.UploadFile(this.item.Id, UploadTypes.Product, formData, f).subscribe(event=>{
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
