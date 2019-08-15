import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less']
})
export class PhotoViewerComponent implements OnInit {
  @Input() items:PhotoView[] = [];
  @Input() current:number = 0;
  @Output() onClose = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  closeViewer(){
    this.onClose.emit(true);
  }



  

}


export interface PhotoView{
  Name?:string;
  Link?:string;
  Path:string;
}
