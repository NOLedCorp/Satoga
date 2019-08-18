import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  photoes:any = [
  ];

  show = false;
  current = 0;
  constructor(private ss:SatogaService, private ls:LoadService, public us:UserService, public ms:ModalService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getPhotoes().subscribe(items => {
      if(items && items.length>0){
        this.photoes = items;
      }
      
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

  close(id=-1){
    let i = this.photoes.findIndex(p => p.Id==id);
    if(i>-1){
      this.show = true;
      this.current = i;
    }else{
      this.show = false;
    }
    let html = document.getElementsByTagName('html')[0];
    html.style.overflow = this.show?'hidden':'unset';
  }

}
