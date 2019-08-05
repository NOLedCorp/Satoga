import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Input() item:any = null;
  userForm:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,  private ms:ModalService, private ls:LoadService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      //Phone: ['', [Validators.required, Validators.pattern]],
      Description: ['']
    });
  }

  send(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }

    //то, что отправляется на сервер
    let app = {
      App: {
        Name:this.userForm.value.Name,
        Description:this.userForm.value.Description,
        Email:this.userForm.value.Email
      }
    }

  }

  get f(){return this.userForm.controls};

}
