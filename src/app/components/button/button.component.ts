import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { IconName, Size } from '../../../types/components';
import { IconComponent } from '../icon/icon.component';
import { DividerComponent } from '../divider/divider.component';

const BASE_CLASSES = {
  xs: ['rounded', 'text-xs'],
  sm: ['rounded-md', 'text-sm', 'leading-4'],
  base: ['rounded-md', 'text-sm'],
  lg: ['rounded-md', 'text-base'],
  xl: ['rounded-md', 'text-base'],
};

const PADDING_CLASSES = {
  xs: ['px-2.5', 'py-1.5'],
  sm: ['px-3', 'py-2'],
  base: ['px-4', 'py-2'],
  lg: ['px-4', 'py-2'],
  xl: ['px-6', 'py-3'],
};

const ICON_MARGIN_CLASSES = {
  xs: { leading: ['-ml-0.5', 'mr-2'], trailing: ['ml-2', '-mr-0.5'] },
  sm: { leading: ['-ml-0.5', 'mr-2'], trailing: ['ml-2', '-mr-0.5'] },
  base: { leading: ['-ml-1', ' mr-2'], trailing: ['ml-2 ', '-mr-1'] },
  lg: { leading: ['-ml-1 ', 'mr-3'], trailing: ['ml-3 ', '-mr-1'] },
  xl: { leading: ['-ml-1 ', 'mr-3'], trailing: ['ml-3 ', '-mr-1'] },
};

const ICON_PADDING_CLASSES = {
  xs: ['p-1'],
  sm: ['p-1.5'],
  base: ['p-2'],
  lg: ['p-2'],
  xl: ['p-3'],
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent, DividerComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size: Size = 'base';
  @Input() leadingIcon?: IconName;
  @Input() trailingIcon?: IconName;
  @Input() onlyIcon?: IconName;
  @Input() divider?: 'left' | 'right';
  @Output() clickEvent = new EventEmitter<void>();

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

  @HostBinding('class') classes = 'flex items-center';

  get buttonClasses(): string[] {
    let classes = BASE_CLASSES[this.size];
    const outlineClasses = ['border-2', 'border-zinc-800'];
    if (this.onlyIcon) {
      classes = [...classes, ...ICON_PADDING_CLASSES[this.size]];
    } else {
      classes = [...classes, ...PADDING_CLASSES[this.size]];
    }
    if (this.outlined) {
      classes = [...classes, ...outlineClasses];
    }
    return classes;
  }

  get leadingIconClasses(): string {
    return ICON_MARGIN_CLASSES[this.size]['leading'].join(' ');
  }

  get trailingIconClasses(): string {
    return ICON_MARGIN_CLASSES[this.size]['trailing'].join(' ');
  }

  handleOnClick(): void {
    this.clickEvent.emit();
  }
}
