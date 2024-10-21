import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {
  toolbarTools = [
    { name: 'Search', route: '/search', icon: '/search.svg' },
    { name: 'Cart', route: '/cart', icon: '/cart.svg' },
    { name: 'Login', route: '/login', icon: '/user.svg' },
  ];
}
