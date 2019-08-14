import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit {
  @Input() type:string;
  @Input() href:string;
  @Input() text:string;
  @Input() editable:boolean = false;

  @Output() onChange = new EventEmitter<boolean>();

  checked = false;
  constructor() { }

  ngOnInit() {
  }

  getValue(v){
    if(v){
        return v.split('__')[1];
    }
  }

  change(){
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }

}
