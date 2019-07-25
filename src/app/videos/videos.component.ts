import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(public snt:DomSanitizer) { }

  ngOnInit() {
    this.videos.forEach(v => {
      v.Path = v.Path.replace('youtu.be/','www.youtube.com/embed/');
    })
  }

  getUrl(v){
    return ;
  }

}
