import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaccComponent } from './navacc.component';

describe('NavaccComponent', () => {
  let component: NavaccComponent;
  let fixture: ComponentFixture<NavaccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavaccComponent]
    });
    fixture = TestBed.createComponent(NavaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
