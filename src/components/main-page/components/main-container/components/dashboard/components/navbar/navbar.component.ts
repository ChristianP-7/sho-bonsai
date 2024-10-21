import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from './home';
import { OptionsComponent } from './options/options.component';
import { ToolsComponent } from './tools/tools.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HomeComponent, OptionsComponent, ToolsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
