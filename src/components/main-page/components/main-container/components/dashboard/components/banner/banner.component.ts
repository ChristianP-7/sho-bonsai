import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  banner: string = '/banner.webp';
}
