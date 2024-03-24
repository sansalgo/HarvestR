import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { IconName, Size } from '../../../types/app';
import { IconComponent } from '../icon/icon.component';

const SIZE_CLASSES = {
  xs: ['rounded', 'px-2.5', 'py-1.5', 'text-xs'],
  sm: ['rounded-md', 'px-3', 'py-2', 'text-sm', 'leading-4'],
  base: ['rounded-md', 'px-4', 'py-2', 'text-sm'],
  lg: ['rounded-md', 'px-4', 'py-2', 'text-base'],
  xl: ['rounded-md', 'px-6', 'py-3', 'text-base'],
};

const ICON_POS_CLASSES = {
  xs: { leading: ['-ml-0.5', 'mr-2'], trailing: ['ml-2', '-mr-0.5'] },
  sm: { leading: ['-ml-0.5', 'mr-2'], trailing: ['ml-2', '-mr-0.5'] },
  base: { leading: ['-ml-1', ' mr-2'], trailing: ['ml-2 ', '-mr-1'] },
  lg: { leading: ['-ml-1 ', 'mr-3'], trailing: ['ml-3 ', '-mr-1'] },
  xl: { leading: ['-ml-1 ', 'mr-3'], trailing: ['ml-3 ', '-mr-1'] },
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size: Size = 'base';
  @Input() leadingIcon?: IconName;
  @Input() trailingIcon?: IconName;
  @Input() onlyIcon?: IconName;

  @Input({ transform: booleanAttribute })
  get outlined(): boolean {
    return this._outlined;
  }
  set outlined(value) {
    this._outlined = value;
  }
  private _outlined: boolean = false;

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  private _disabled: boolean = false;

  get buttonClasses(): string[] {
    const classes = SIZE_CLASSES[this.size];
    const outlineClasses = ['border-2', 'border-zinc-800'];
    if (this.outlined) {
      return [...classes, ...outlineClasses];
    }
    return classes;
  }

  get leadingIconClasses(): string {
    return ICON_POS_CLASSES[this.size]['leading'].join(' ');
  }

  get trailingIconClasses(): string {
    return ICON_POS_CLASSES[this.size]['trailing'].join(' ');
  }
}
