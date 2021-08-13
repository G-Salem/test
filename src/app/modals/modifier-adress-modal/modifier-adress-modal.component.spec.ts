import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAdressModalComponent } from './modifier-adress-modal.component';

describe('ModifierAdressModalComponent', () => {
  let component: ModifierAdressModalComponent;
  let fixture: ComponentFixture<ModifierAdressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAdressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAdressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
