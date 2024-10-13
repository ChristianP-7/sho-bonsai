import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsContainerComponent } from './arrivals-container.component';

describe('ArrivalsContainerComponent', () => {
  let component: ArrivalsContainerComponent;
  let fixture: ComponentFixture<ArrivalsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivalsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
