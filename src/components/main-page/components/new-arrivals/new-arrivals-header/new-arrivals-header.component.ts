import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals-header.component.html',
  styleUrl: './new-arrivals-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsHeaderComponent {}
