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
  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/sign-in']);
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
