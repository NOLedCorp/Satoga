import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgSelectComponent } from './prog-select.component';

describe('ProgSelectComponent', () => {
  let component: ProgSelectComponent;
  let fixture: ComponentFixture<ProgSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
