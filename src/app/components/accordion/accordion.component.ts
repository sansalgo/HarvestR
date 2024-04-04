import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  expandedIndex: number = NaN;

  toggle(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? NaN : index;
  }
}
