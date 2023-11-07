import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContraDialogAdminComponent } from './add-contra-dialog-admin.component';

describe('AddContraDialogAdminComponent', () => {
  let component: AddContraDialogAdminComponent;
  let fixture: ComponentFixture<AddContraDialogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContraDialogAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContraDialogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
