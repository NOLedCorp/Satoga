import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  items = [
    {
      Id:1,
      Photo: '../../assets/images/lozha.png',
      InStock: 0,
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:2,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:3,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:4,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:5,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 0,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:6,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 36000
    },
    {
      Id:7,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:8,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:9,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 70000
    }
  ];
  constructor(private ss:SatogaService, public ms:ModalService, private ls:LoadService, public us:UserService, private as:AdminService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getGoods(8).subscribe(items => {
      if(items && items.length>0){
        this.items = items;
      }
      this.ls.showLoad=false;
    })
  }

  showSections(){
    let catalog = document.getElementsByClassName('moveto')[0];
    catalog.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
