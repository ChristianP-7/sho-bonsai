import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ItemSummary } from '../../../../models/item/item.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
  item = input.required<ItemSummary>();
}
