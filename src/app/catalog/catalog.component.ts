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
  @Input() items: any = [
    {
      Id:1,
      Photo: '../../assets/images/lozha.png',
      InStock: 0,
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:2,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:3,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:4,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:5,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      InStock: 0,
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
      Price: 36000
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
      Price: 70000
    }
  ];

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
          return a.Price>b.Price?1:-1;
        })
        break;
      }
      case SortTypes.Decreese: {
        this.items = this.items.sort((a, b) => {
          return a.Price<b.Price?1:-1;
        })
        break;
      }
    }
  }

}
