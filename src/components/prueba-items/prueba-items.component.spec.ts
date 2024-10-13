import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaItemsComponent } from './prueba-items.component';

describe('PruebaItemsComponent', () => {
  let component: PruebaItemsComponent;
  let fixture: ComponentFixture<PruebaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
