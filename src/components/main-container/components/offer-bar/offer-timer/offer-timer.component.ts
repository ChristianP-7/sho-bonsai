import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-offer-timer',
  template: '<countdown/>',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './offer-timer.component.html',
  styleUrl: './offer-timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferTimerComponent {
  countdownConfig: CountdownConfig = {
    leftTime: 35000, // Tiempo en segundos, aquí configurado a 60 segundos
    format: 'HH:mm:ss',
    demand: false, // Iniciar automáticamente
  };
}
