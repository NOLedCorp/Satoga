import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  items = [];
  constructor(private ss:SatogaService, public ms:ModalService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getGoods().subscribe(items => {
      this.items = items;
      this.ls.showLoad=false;
    })
  }

  showCatalog(){
    let catalog = document.getElementsByClassName('catalog')[0];
    catalog.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
