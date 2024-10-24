import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from '../../../main-page/components/main-container/components/dashboard/components/navbar/home/home.component';
import { OptionsComponent } from '../../../main-page/components/main-container/components/dashboard/components/navbar/options/options.component';
import { ToolsComponent } from '../../../main-page/components/main-container/components/dashboard/components/navbar/tools/tools.component';
import { BannerComponent } from '../../../main-page/components/main-container/components/dashboard/components/banner/banner.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-store-navbar',
  standalone: true,
  imports: [
    HomeComponent,
    OptionsComponent,
    ToolsComponent,
    BannerComponent,
    NgStyle,
    NgClass,
  ],
  templateUrl: './store-navbar.component.html',
  styleUrl: './store-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreNavbarComponent {
  banner: string = '/banner.webp';
}
