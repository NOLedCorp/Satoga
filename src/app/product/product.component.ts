import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  current:number;
  product:any = {
    Id:1,
    Photo: '../../assets/images/lozha.png',
    Name: 'Ложа для СКС | C-205 P',
    Description: 'Полупистолетная с щеткой. Орех',
    FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
    Price: 18000,
    Photoes: [
      {
        Id:1,
        Path:'../../assets/images/lozha.png'
      },
      {
        Id:2,
        Path:'../../assets/images/lozha.png'
      },
      {
        Id:3,
        Path:'../../assets/images/lozha.png'
      },
      {
        Id:4,
        Path:'../../assets/images/lozha.png'
      },
      {
        Id:5,
        Path:'../../assets/images/lozha.png'
      }
    ]
  }
  constructor() { }

  ngOnInit() {
    this.product.Photoes.unshift({Id:0, Path: this.product.Photo});
    this.current = 0;
  }

  show(i){
    this.current=i;
  }

}
