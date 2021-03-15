import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitalMenuComponent } from './inital-menu.component';

describe('InitalMenuComponent', () => {
  let component: InitalMenuComponent;
  let fixture: ComponentFixture<InitalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
