import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACCEUILComponent } from './acceuil.component';

describe('ACCEUILComponent', () => {
  let component: ACCEUILComponent;
  let fixture: ComponentFixture<ACCEUILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACCEUILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACCEUILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
