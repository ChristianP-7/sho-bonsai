import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrivals-container',
  standalone: true,
  imports: [],
  templateUrl: './arrivals-container.component.html',
  styleUrl: './arrivals-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrivalsContainerComponent {

}
