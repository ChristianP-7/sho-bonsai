import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsHeaderComponent } from './new-arrivals-header.component';

describe('NewArrivalsHeaderComponent', () => {
  let component: NewArrivalsHeaderComponent;
  let fixture: ComponentFixture<NewArrivalsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
