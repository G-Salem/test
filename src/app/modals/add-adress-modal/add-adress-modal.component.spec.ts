import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdressModalComponent } from './add-adress-modal.component';

describe('AddAdressModalComponent', () => {
  let component: AddAdressModalComponent;
  let fixture: ComponentFixture<AddAdressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
