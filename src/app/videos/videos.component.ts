import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.less']
})
export class VideosComponent implements OnInit {
  videos:any = [
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    },
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    },
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    },
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    },
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    },
    {
      Path: 'https://youtu.be/uGBZ_--HPcM'
    }
  ]
  constructor(public snt:DomSanitizer, public ms:ModalService, private ss:SatogaService, private ls:LoadService, public us:UserService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getPhotoes().subscribe(items => {
      this.videos = items;
      this.videos.forEach(v => {
        v.Path = v.Path.replace('youtu.be/','www.youtube.com/embed/');
      })
      this.ls.showLoad=false;
    })
    
  }

}
