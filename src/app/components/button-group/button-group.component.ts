import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Size } from '../../../types/app';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent implements AfterContentInit {
  @ContentChildren(ButtonComponent) buttons!: QueryList<ButtonComponent>;
  @Input() size: Size = 'base';

  ngAfterContentInit(): void {
    this.applyPropertiesToButtons();
  }

  private applyPropertiesToButtons(): void {
    if (this.buttons && this.buttons.length > 1) {
      this.buttons.forEach(button => {
        button.size = this.size;
        button.outlined = false;
      });
    }
  }
}
