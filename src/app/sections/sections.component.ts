import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.less']
})
export class SectionsComponent implements OnInit {
  items:any = [
    {
      Id:1,
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/images/lozha.png",
      MinPrice: 18000
    },
    {
      Id:2,
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/images/lozha.png",
      MinPrice: 18000
    },
    {
      Id:3,
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/images/lozha.png",
      MinPrice: 18000
    },
    {
      Id:4,
      Name:"Элитные ложи",
      Description:"Высококачественный орех. Супер амортизатор.",
      Photo: "../../assets/images/lozha.png",
      MinPrice: 18000
    }
  ];
  constructor(private ss:SatogaService, private ls:LoadService, public us:UserService, public ms:ModalService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getSections().subscribe(items => {
      this.items = items;
      this.ls.showLoad=false;
    })
  }

}
