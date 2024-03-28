import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
})
export class RadioGroupComponent {
  checkedValue: string = '';

  sampleData = [
    { id: 1, label: 'div' },
    { id: 2, label: 'section' },
    { id: 3, label: 'p' },
    { id: 4, label: 'table' },
    { id: 5, label: 'a' },
    { id: 6, label: 'h1' },
    { id: 7, label: 'title' },
    { id: 8, label: 'body' },
  ];

  isChecked(value: string): boolean {
    return value === this.checkedValue;
  }

  handleCheck(value: string) {
    this.checkedValue = value;
  }
}
