import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleComponent } from './detele.component';

describe('DeteleComponent', () => {
  let component: DeteleComponent;
  let fixture: ComponentFixture<DeteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
