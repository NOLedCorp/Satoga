import { Component, OnInit, Input } from '@angular/core';

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
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:2,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:3,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:4,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:5,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
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
      Price: 18000
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
      Price: 18000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
