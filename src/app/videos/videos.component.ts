import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-videos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.less']
})
export class VideosComponent implements OnInit {
  videos:any = [];
  show = true;
  constructor(public snt:DomSanitizer, 
    public ms:ModalService, 
    private ss:SatogaService, 
    private ls:LoadService, 
    public us:UserService,
    private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getVideos().subscribe(items => {
      if(items && items.lenght>0){
        this.videos = items;
        
      }
      this.videos = items;
      this.videos.forEach(v => {
        v.Path = v.Path.replace('youtu.be/','www.youtube.com/embed/');
      })
      this.changeDetection.detectChanges();
      
      this.ls.showLoad=false;
    })
    
  }

}
