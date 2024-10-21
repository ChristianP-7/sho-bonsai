import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OfferTimerComponent } from './offer-timer/offer-timer.component';
import { OfferTextComponent } from './offer-text/offer-text.component';

@Component({
  selector: 'app-offer-bar',
  standalone: true,
  imports: [OfferTimerComponent, OfferTextComponent],
  templateUrl: './offer-bar.component.html',
  styleUrl: './offer-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferBarComponent {}
