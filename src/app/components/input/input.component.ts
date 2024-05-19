import { Component, Input } from '@angular/core';
import { IconName } from '../../../types/components';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent, DividerComponent],
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
  // TODO: add trailingButton
  @Input() trailingButton?: string;
  @Input() placeholder: string = '';

  @Input() value: string = '';
}
