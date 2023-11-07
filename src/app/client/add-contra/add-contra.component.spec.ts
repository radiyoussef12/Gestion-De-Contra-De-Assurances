import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContraComponent } from './add-contra.component';

describe('AddContraComponent', () => {
  let component: AddContraComponent;
  let fixture: ComponentFixture<AddContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
