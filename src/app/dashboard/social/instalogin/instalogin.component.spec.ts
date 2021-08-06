import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaloginComponent } from './instalogin.component';

describe('InstaloginComponent', () => {
  let component: InstaloginComponent;
  let fixture: ComponentFixture<InstaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
