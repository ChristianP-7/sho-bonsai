import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBtnComponent } from './store-btn.component';

describe('StoreBtnComponent', () => {
  let component: StoreBtnComponent;
  let fixture: ComponentFixture<StoreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
