import { Component, Input } from '@angular/core';
import { IconName } from '../../../types/app';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() leadingIcon?: IconName;
  @Input() trailingIcon?: IconName;
  @Input() leadingAddOn?: string;
  @Input() trailingAddOn?: string;
  @Input() leadingInlineAddOn?: string;
  @Input() trailingInlineAddOn?: string;
  @Input() trailingButton?: string;

  get inputClasses(): string[] {
    const classes = [];
    if (this.leadingIcon) {
      classes.push('pl-10');
    }
    if (this.trailingIcon) {
      classes.push('pr-10');
    }
    if (this.leadingInlineAddOn) {
      classes.push('pl-16');
    }
    if (this.trailingInlineAddOn) {
      classes.push('pr-16');
    }
    if (this.leadingAddOn && this.trailingAddOn) {
      classes.push('rounded-none');
    } else if (this.leadingAddOn) {
      classes.push('rounded-r-md');
    } else if (this.trailingAddOn) {
      classes.push('rounded-l-md');
    } else {
      classes.push('rounded-md');
    }

    return classes;
  }

  get inputGroupClasses(): string[] {
    if (this.leadingAddOn || this.trailingAddOn) {
      return ['mt-1', 'flex', 'rounded-md', 'shadow-sm'];
    } else {
      return ['relative', 'mt-1', 'rounded-md', 'text-white', 'shadow-sm'];
    }
  }
}
