import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Satoga';
  showSearch = false;
  showMenu = false;
  last = 0;
  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/sign-in']);
  }
  @HostListener('document:scroll', ['$event']) doScroll($event){
    if(window.pageYOffset>0){
      this.showMenu = true;
    }else{
      this.showMenu = false;
    }
  }
  constructor(public router:Router, public us:UserService){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
     });
  }

  search(str){
    this.showSearch = false;
    this.router.navigate(['search',str]);
  }

  show(){
    this.showSearch = !this.showSearch;
  }

  close(e){
    this.showSearch = false;
  }
}
