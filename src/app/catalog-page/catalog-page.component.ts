import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { SatogaService } from '../services/satoga.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less']
})
export class CatalogPageComponent implements OnInit {
  items = [];
  constructor(private ls:LoadService, private ss:SatogaService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getGoods().subscribe(items => {
      if(items && items.length>0){
        this.items = items;
      }
      this.ls.showLoad=false;
    })
  }

}
