import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoCardSingleComponent } from './weather-info-card-single.component';

describe('WeatherInfoCardSingleComponent', () => {
  let component: WeatherInfoCardSingleComponent;
  let fixture: ComponentFixture<WeatherInfoCardSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoCardSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoCardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
