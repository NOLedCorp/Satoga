import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { SatogaService } from '../services/satoga.service';

@Component({
  selector: 'stg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  items:any = [];
  slides:NodeListOf<Element>;
  headers:NodeListOf<Element>;
  current = 0;
  constructor(private ls:LoadService, private ss:SatogaService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getMain().subscribe(x => {
      if(x){
        this.items = x;
        this.ls.showLoad = false;
        
        setTimeout(()=> {
          this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
          this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
        }, 100)
      }else{
        this.ls.showLoad = false;
        
      }
      
    })
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
