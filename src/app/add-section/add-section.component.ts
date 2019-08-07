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
      Photo: ['']
    });
    
  }
  send(){
    
    this.submitted = true;
    console.log(this.addForm);
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
    }
    
  }

}
