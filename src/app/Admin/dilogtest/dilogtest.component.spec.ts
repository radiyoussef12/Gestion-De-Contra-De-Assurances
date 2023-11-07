import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogtestComponent } from './dilogtest.component';

describe('DilogtestComponent', () => {
  let component: DilogtestComponent;
  let fixture: ComponentFixture<DilogtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilogtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilogtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
