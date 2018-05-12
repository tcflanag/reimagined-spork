import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerCardDetailComponent } from './power-card-detail.component';

describe('HeroDetailComponent', () => {
  let component: PowerCardDetailComponent;
  let fixture: ComponentFixture<PowerCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
