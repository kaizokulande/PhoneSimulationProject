import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDepotComponent } from './validation-depot.component';

describe('ValidationDepotComponent', () => {
  let component: ValidationDepotComponent;
  let fixture: ComponentFixture<ValidationDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
