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
      console.log(x);
      this.sections = x;
    })
    this.addForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      SectionId: ['', Validators.required],
      FullDescription: [''],
      Photo: [''],
      InStock: [''],
      Price: ['', Validators.required],
      Main: [''],
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
              this.items.push(res);
              this.ms.close();
            }
            
          })
        })
      })
    }
  }

}
