import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.less']
})
export class AddPhotoComponent extends AddService implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
