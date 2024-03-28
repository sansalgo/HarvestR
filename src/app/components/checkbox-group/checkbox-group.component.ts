import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.css',
})
export class CheckboxGroupComponent {
  checkedValues: string[] = [];

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
    return this.checkedValues.includes(value);
  }

  handleCheck(value: string): void {
    if (this.isChecked(value)) {
      this.checkedValues = this.checkedValues.filter(item => item !== value);
    } else {
      this.checkedValues.push(value);
    }
    // this.selectionChange.emit(this.selectedOptions);
  }
}
