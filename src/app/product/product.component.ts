import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { SatogaService } from '../services/satoga.service';
import { ActivatedRoute } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  current:number;
  product:any;
  constructor(public ms:ModalService, private ss:SatogaService, private ls:LoadService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getGood(this.route.snapshot.paramMap.get("id")).subscribe(good => {
      
      this.product = good;
      this.product.Photoes.unshift({Id:0, Photo: this.product.Photo});
      this.current = 0;
      this.ls.showLoad = false;
      console.log( this.product.Photoes)
    })
    
  }

  show(i){
    this.current=i;
  }

}
