import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut1Component } from './tut1.component';

describe('Tut1Component', () => {
  let component: Tut1Component;
  let fixture: ComponentFixture<Tut1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
