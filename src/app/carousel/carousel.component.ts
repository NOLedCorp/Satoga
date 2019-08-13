import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { LoadService } from '../services/load.service';
import { SatogaService } from '../services/satoga.service';

@Component({
  selector: 'stg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  items:any = [
    {
      Id:1,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:2,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:3,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:4,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:5,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:6,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:7,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:8,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:9,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    }
  ];
  slides:any;
  headers:any;
  current = 0;
  x = null;
  


  constructor(private ls:LoadService, private ss:SatogaService) { }

  ngOnInit() {
    setTimeout(()=> {
      this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
      this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
      // carousel.addEventListener('touchstart', this.start, false);
      // carousel.addEventListener('touchmove', this.swipe, false);
      // carousel.addEventListener('touchend', this.end, false);
    }, 100)

    
    
    
    // this.ls.showLoad = true;
    // this.ss.getMain().subscribe(x => {
    //   if(x){
    //     this.items = x;
    //     this.ls.showLoad = false;
        
    //     setTimeout(()=> {
    //       this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
    //       this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
    //     }, 100)
    //   }else{
    //     this.ls.showLoad = false;
        
    //   }
      
    // })
  }

  swipe(e?){
    this.slides[this.current].style.left = (e.touches[0].clientX-this.x).toString()+'px';
    let l = Number(this.slides[this.current].style.left.replace('px',''));
    if(l<0){
      this.next();
    }
    if(l>0){
      this.prev();
    }
  }
  start(e?){
    this.x = e.touches[0].clientX;
    
  }
  next(){
    if(this.slides.length==0){
      this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
      this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
    }
    this.current+=this.current==this.slides.length-1?0:1;
    this.setPosition();
  }
  prev(){
    if(this.slides.length==0){
      this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
      this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
    }
    this.current-=this.current==0?0:1;
    this.setPosition();
  }


  setPosition(){
    this.slides[this.current].className = 'slide active';
    console.log(this);
    this.headers[this.current].className = 'slide active';
    if(this.current<this.slides.length-1){
      this.slides[this.current+1].className = 'slide next'
      this.headers[this.current+1].className = 'slide next'
    }
    if(this.current>0){
      this.slides[this.current-1].className = 'slide prev'
      this.headers[this.current-1].className = 'slide prev'
    }
    
  }

}
