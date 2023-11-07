import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheComponent } from './branche.component';

describe('BrancheComponent', () => {
  let component: BrancheComponent;
  let fixture: ComponentFixture<BrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
