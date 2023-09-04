import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPsnComponent } from './menu-psn.component';

describe('MenuPsnComponent', () => {
  let component: MenuPsnComponent;
  let fixture: ComponentFixture<MenuPsnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPsnComponent]
    });
    fixture = TestBed.createComponent(MenuPsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
