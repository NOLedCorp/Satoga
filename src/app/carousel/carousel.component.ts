import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  slides:NodeListOf<Element>;
  headers:NodeListOf<Element>;
  current = 0;
  constructor() { }

  ngOnInit() {
    this.slides = document.querySelector('.carousel-body').querySelectorAll('.slide');
    this.headers = document.querySelector('.carousel-header').querySelectorAll('.slide');
    console.log(this.slides);
  }

  next(){
    this.current+=this.current==this.slides.length-1?0:1;
    this.setPosition();
  }
  prev(){
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
