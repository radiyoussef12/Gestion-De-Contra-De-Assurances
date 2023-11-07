import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContraAdminComponent } from './add-contra-admin.component';

describe('AddContraAdminComponent', () => {
  let component: AddContraAdminComponent;
  let fixture: ComponentFixture<AddContraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContraAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
