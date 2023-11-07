import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContraDialogComponent } from './add-contra-dialog.component';

describe('AddContraDialogComponent', () => {
  let component: AddContraDialogComponent;
  let fixture: ComponentFixture<AddContraDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContraDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
