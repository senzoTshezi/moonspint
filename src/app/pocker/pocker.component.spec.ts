import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockerComponent } from './pocker.component';

describe('PockerComponent', () => {
  let component: PockerComponent;
  let fixture: ComponentFixture<PockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
