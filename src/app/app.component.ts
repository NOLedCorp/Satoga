import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Satoga';
  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/sign-in']);
  }
  constructor(public router:Router, public us:UserService){
    
  }

  search(str){
    this.router.navigate(['search',str]);
  }
}
