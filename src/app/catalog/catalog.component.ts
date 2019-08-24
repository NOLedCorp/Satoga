import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { SortTypes } from '../services/models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  @Input() items: any = [];

  sort:SortTypes = 0;
  constructor(public ms:ModalService, public us:UserService) { }

  ngOnInit() {
  }


  getSort(){
    switch (this.sort){
      case SortTypes.None: {
        return 'fa-sort';
      }
      case SortTypes.Increese: {
        return 'fa-sort-up'
      }
      case SortTypes.Decreese: {
        return 'fa-sort-down'
      }
    }
  }

  changeSort(){
    if(this.sort == 2){
      this.sort=0;
    }else{
      this.sort++;
    }
    this.doSort();
  }

  doSort(){
    switch (this.sort){
      case SortTypes.None: {
        this.items = this.items.sort((a, b) => {
          return a.Id>b.Id?1:-1;
        })
        break;
      }
      case SortTypes.Increese: {
        this.items = this.items.sort((a, b) => {
          return Number(a.Price)>Number(b.Price)?1:-1;
        })
        break;
      }
      case SortTypes.Decreese: {
        this.items = this.items.sort((a, b) => {
          return Number(a.Price)<Number(b.Price)?1:-1;
        })
        break;
      }
    }
  }

}
