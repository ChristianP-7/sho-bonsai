import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTextComponent } from './offer-text.component';

describe('OfferTextComponent', () => {
  let component: OfferTextComponent;
  let fixture: ComponentFixture<OfferTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
