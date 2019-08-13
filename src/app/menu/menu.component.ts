import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  show = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      if(this.show){
        this.open();
      }
      
     });
  }

  open(){
    let html = document.getElementsByTagName('html')[0];
    html.style.overflow = this.show?'unset':'hidden';
    this.show = !this.show;
  }

  showCatalog(){
    let catalog = document.getElementsByClassName('sections')[0];
    catalog.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
