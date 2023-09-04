import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyBarComponent } from './sony-bar.component';

describe('SonyBarComponent', () => {
  let component: SonyBarComponent;
  let fixture: ComponentFixture<SonyBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonyBarComponent]
    });
    fixture = TestBed.createComponent(SonyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
