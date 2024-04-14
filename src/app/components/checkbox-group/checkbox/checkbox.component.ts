import { Component, Input } from '@angular/core';
import { CheckboxService } from './checkbox.service';
import { BadgeComponent } from '../../badge/badge.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() value: string = '';

  constructor(private checkboxService: CheckboxService) {}

  get isChecked(): boolean {
    return this.checkboxService.getCheckedValues.includes(this.value);
  }

  handleCheck(): void {
    if (this.isChecked) {
      this.checkboxService.setCheckedValues =
        this.checkboxService.getCheckedValues.filter(
          item => item !== this.value
        );
    } else {
      this.checkboxService.setCheckedValues = [
        ...this.checkboxService.getCheckedValues,
        this.value,
      ];
    }
    // this.selectionChange.emit(this.selectedOptions);
  }
}
