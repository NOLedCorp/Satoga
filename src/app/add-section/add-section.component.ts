import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { LoadService } from '../services/load.service';
import { UploadTypes } from '../services/models';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.less']
})
export class AddSectionComponent extends AddService implements OnInit {

  constructor(private as:AdminService, private ms:ModalService, private ls:LoadService) { 
    super();
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Photo: ['', [Validators.required, Validators.pattern(this.ipattern)]]
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
      this.as.addItem(this.v, UploadTypes.Section).subscribe(x => {
        Object.keys(this.files).filter(file => !!this.files[file]).forEach(f => {
          let formData = new FormData();
          formData.append('Data', this.files[f]);
          this.as.UploadFile(x, UploadTypes.Section, formData).subscribe(event=>{
            if(event.type == HttpEventType.UploadProgress){
              this.ls.load = Math.round(event.loaded/event.total * 100);
              
            }
            else if(event.type == HttpEventType.Response){
              
              this.ls.showLoad = false;
              this.submitted = false;
              this.items.push(Object.assign({Id:x},this.v));
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
        this.as.updateItem(this.update, UploadTypes.Section).subscribe(x => {
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
        this.as.UploadFile(this.item.Id, UploadTypes.Section, formData, f).subscribe(event=>{
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
