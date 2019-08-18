import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { TabHeadingDirective } from 'ngx-bootstrap';

@Component({
  selector: 'bricks',
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.less']
})
export class BricksComponent implements OnInit {

  showItems: any = [];
  @Input() size = 4;
  @Input() items = [];
  @Input() template:TemplateRef<any>
  constructor() { }

  ngOnInit() {
    for(let  i = 0; i<this.size; i++){
      this.showItems.push([]);
    }
    this.showItems = this.cut(this.showItems, this.size, this.items);
  }

  cut(sub:any, s:number, array:any){
    let cur = 0;
    for(let i = 0; i<array.length; i++){
      if(cur == s){
        cur = 0;
      }
      sub[cur].push(array[i]);
      cur++;
    }
    return sub;
  }

}
