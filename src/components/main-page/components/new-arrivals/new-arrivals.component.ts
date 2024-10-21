import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrivalsContainerComponent } from './arrivals.-container';
import { NewArrivalsHeaderComponent } from './new-arrivals-header';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [
    CommonModule,
    NewArrivalsHeaderComponent,
    ArrivalsContainerComponent,
  ],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsComponent {}
