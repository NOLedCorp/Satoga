import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SatogaService } from '../services/satoga.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {
  section:any = {
    Name: "Название раздела",
    Goods: [
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
    ]
  }
  constructor(private route:ActivatedRoute, private ss:SatogaService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ss.getSection(params['id']).subscribe(x => {
        this.section = x;
        console.log(x);
      })
    })
  }

}
