import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewArrivalsHeaderComponent } from './new-arrivals-header/new-arrivals-header.component';
import { CommonModule } from '@angular/common';
import { ArrivalsContainerComponent } from './arrivals-container';

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
