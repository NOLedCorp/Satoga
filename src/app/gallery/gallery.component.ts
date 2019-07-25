import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  photoes:any = [
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
