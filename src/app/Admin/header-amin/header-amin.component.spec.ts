import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAminComponent } from './header-amin.component';

describe('HeaderAminComponent', () => {
  let component: HeaderAminComponent;
  let fixture: ComponentFixture<HeaderAminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
