import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialMenuVideoComponent } from './initial-menu-video.component';

describe('InitialMenuVideoComponent', () => {
  let component: InitialMenuVideoComponent;
  let fixture: ComponentFixture<InitialMenuVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialMenuVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialMenuVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
