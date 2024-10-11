import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-store-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-btn.component.html',
  styleUrl: './store-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreBtnComponent {}
