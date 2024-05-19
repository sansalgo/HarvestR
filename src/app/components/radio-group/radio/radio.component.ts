import { Component, Input } from '@angular/core';
import { RadioGroupComponent } from '../radio-group.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
})
export class RadioComponent {
  @Input() value: string = '';

  constructor(private radioGroup: RadioGroupComponent) {}

  get isChecked(): boolean {
    return this.value === this.radioGroup.getCheckedValue;
  }

  handleCheck() {
    this.radioGroup.setCheckedValue = this.value;
  }
}
