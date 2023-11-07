import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcontraComponent } from './getcontra.component';

describe('GetcontraComponent', () => {
  let component: GetcontraComponent;
  let fixture: ComponentFixture<GetcontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
