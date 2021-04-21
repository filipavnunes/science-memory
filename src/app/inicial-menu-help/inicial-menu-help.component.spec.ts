import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialMenuHelpComponent } from './inicial-menu-help.component';

describe('InicialMenuHelpComponent', () => {
  let component: InicialMenuHelpComponent;
  let fixture: ComponentFixture<InicialMenuHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialMenuHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialMenuHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
