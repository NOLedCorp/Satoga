import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less']
})
export class PhotoViewerComponent implements OnInit {
  @Input() items:PhotoView[] = [];
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeViewer(){
    this.close.emit('string');
  }

}


export interface PhotoView{
  Name?:string;
  Link?:string;
  Path:string;
}
