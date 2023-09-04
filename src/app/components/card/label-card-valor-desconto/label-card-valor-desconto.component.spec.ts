import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCardValorDescontoComponent } from './label-card-valor-desconto.component';

describe('LabelCardValorDescontoComponent', () => {
  let component: LabelCardValorDescontoComponent;
  let fixture: ComponentFixture<LabelCardValorDescontoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelCardValorDescontoComponent]
    });
    fixture = TestBed.createComponent(LabelCardValorDescontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
