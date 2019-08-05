import { Component, OnInit } from '@angular/core';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articles:any = [
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    },
    {
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      Author: 'Иван Номоконов',
      Path:'../../assets/article.pdf'
    }
  ]
  constructor(private ss:SatogaService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ss.getSections().subscribe(items => {
      this.articles = items;
      this.ls.showLoad=false;
    })
  }

}
