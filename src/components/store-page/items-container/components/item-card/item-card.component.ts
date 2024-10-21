import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ItemSummary } from '../../../../../models/item/item.model';
import { JsonPipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ItemsService } from '../../../../../services';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe, TitleCasePipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
  item = input.required<ItemSummary>();

  private itemsService = inject(ItemsService); // Inyección del servicio
  private sanitizer = inject(DomSanitizer); // Para sanitizar la URL de la imagen

  imageUrl$: Observable<SafeUrl> | null = null;

  ngOnInit() {
    // Usar this.item() para obtener el valor del ItemSummary
    const currentItem = this.item();

    // Si la imagen existe, usar el proxy para cargarla
    if (currentItem.image.imageUrl) {
      this.imageUrl$ = this.itemsService
        .getImageThroughProxy(currentItem.image.imageUrl)
        .pipe(
          map((blob) => {
            const objectURL = URL.createObjectURL(blob);
            return this.sanitizer.bypassSecurityTrustUrl(objectURL);
          })
        );
    }
  }
}
