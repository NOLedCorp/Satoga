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
  items = [];
  constructor(private ss:SatogaService, public ms:ModalService, private ls:LoadService, public us:UserService, private as:AdminService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getGoods().subscribe(items => {
      this.items = items;
      this.ls.showLoad=false;
    })
    this.as.addSection(null).subscribe(x => {
      console.log(x);
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
