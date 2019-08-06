import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  photoes:any = [
    {
      Name:'Ложа для СКС | C-205 P',
      Photo: '../../assets/images/lozha.png'
    },
    {
      Name:'Ложа для СКС | C-205 P',
      Photo: '../../assets/images/lozha.png'
    },
    {
      Name:'Ложа для СКС | C-205 P',
      Photo: '../../assets/images/lozha.png'
    },
    {
      Name:'Ложа для СКС | C-205 P',
      Photo: '../../assets/images/lozha.png'
    },
    {
      Name:'Ложа для СКС | C-205 P',
      Photo: '../../assets/images/lozha.png'
    }

  ];

  show = false;
  constructor(private ss:SatogaService, private ls:LoadService, public us:UserService) { }

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

  close(){
    this.show = ! this.show;
  }

}
