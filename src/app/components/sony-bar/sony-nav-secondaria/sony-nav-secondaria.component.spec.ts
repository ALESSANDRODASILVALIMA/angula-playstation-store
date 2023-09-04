import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyNavSecondariaComponent } from './sony-nav-secondaria.component';

describe('SonyNavSecondariaComponent', () => {
  let component: SonyNavSecondariaComponent;
  let fixture: ComponentFixture<SonyNavSecondariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonyNavSecondariaComponent]
    });
    fixture = TestBed.createComponent(SonyNavSecondariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
