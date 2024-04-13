import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
})
export class AccordionItemComponent {
  expandedIndex: number = NaN;

  toggle(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? NaN : index;
  }
}