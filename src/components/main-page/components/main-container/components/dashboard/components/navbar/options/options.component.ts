import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent {
  toolbarOptions = [
    { name: 'Categories', route: '/categories' },
    { name: 'Collections', route: '/collections' },
    { name: 'Store', route: '/store' },
    { name: 'Blog', route: '/blog' },
    { name: 'About us', route: '/about-us' },
  ];
}
