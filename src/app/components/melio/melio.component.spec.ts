import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelioComponent } from './melio.component';

describe('MelioComponent', () => {
  let component: MelioComponent;
  let fixture: ComponentFixture<MelioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
