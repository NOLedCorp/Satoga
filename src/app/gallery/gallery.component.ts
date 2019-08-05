import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  photoes:any;

  show = false;
  constructor(private ss:SatogaService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getPhotoes().subscribe(items => {
      this.photoes = items;
      this.ls.showLoad=false;
    })
  }

  getPhotoes(){
    if(this.photoes){
      return this.photoes.map(x => { return {Name: x.Name, Path: x.Photo}})
    }else{
      return [];
    }
    
  }

  close(){
    this.show = ! this.show;
  }

}
