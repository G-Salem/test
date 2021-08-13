import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetDetailComponent } from './carnet-detail.component';

describe('CarnetDetailComponent', () => {
  let component: CarnetDetailComponent;
  let fixture: ComponentFixture<CarnetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
