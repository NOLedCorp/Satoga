import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  items = [];
  constructor(
    private ss:SatogaService, 
    private ls:LoadService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.ls.showLoad = false;
    this.route.params.subscribe(params => {
      this.ss.searchGoods(params['str']).subscribe(x => {
        this.items = x;
      })
    })
    
  }

  initMainData(str){
    return 
  }


}
