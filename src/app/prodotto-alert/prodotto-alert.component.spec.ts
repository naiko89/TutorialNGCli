import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoAlertComponent } from './prodotto-alert.component';

describe('ProdottoAlertComponent', () => {
  let component: ProdottoAlertComponent;
  let fixture: ComponentFixture<ProdottoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
