import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViecontraComponent } from './viecontra.component';

describe('ViecontraComponent', () => {
  let component: ViecontraComponent;
  let fixture: ComponentFixture<ViecontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViecontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViecontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
