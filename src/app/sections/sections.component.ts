import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.less']
})
export class SectionsComponent implements OnInit {
  items:any = [
    {
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/lozha.png",
      MinPrice: 18000
    },
    {
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/lozha.png",
      MinPrice: 18000
    },
    {
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/lozha.png",
      MinPrice: 18000
    },
    {
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/lozha.png",
      MinPrice: 18000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
