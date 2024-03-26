import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconName, Size } from '../../../types/components';

const SIZE_CLASSES = {
  xs: ['h-4', 'w-4'],
  sm: ['h-4', 'w-4'],
  base: ['h-5', 'w-5'],
  lg: ['h-5', 'w-5'],
  xl: ['h-5', 'w-5'],
};

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() icon: IconName = '';
  @Input() size: Size = 'base';
  @Input() class: string = '';
  @Input() margin: 'start' | 'end' | '' = '';

  get iconClasses(): string[] {
    return [...this.class.split(' '), ...SIZE_CLASSES[this.size]];
  }
}
