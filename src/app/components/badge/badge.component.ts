import { Component, Input } from '@angular/core';
import { Size } from '../../../types/app';
import { CommonModule } from '@angular/common';

const SIZE_CLASSES = {
  base: 'rounded px-2 py-0.5 text-xs',
  lg: 'rounded-md px-2.5 py-0.5 text-sm',
};

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() size: 'base' | 'lg' = 'base';

  get badgeClasses(): string {
    return SIZE_CLASSES[this.size];
  }
}
