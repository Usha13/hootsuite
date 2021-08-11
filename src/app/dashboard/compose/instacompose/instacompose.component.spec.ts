import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstacomposeComponent } from './instacompose.component';

describe('InstacomposeComponent', () => {
  let component: InstacomposeComponent;
  let fixture: ComponentFixture<InstacomposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstacomposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstacomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
