import { Component, Input } from '@angular/core';
import { RadioService } from './radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
})
export class RadioComponent {
  @Input() value: string = '';

  constructor(private radioService: RadioService) {}

  get isChecked(): boolean {
    return this.value === this.radioService.getCheckedValue;
  }

  handleCheck() {
    this.radioService.setCheckedValue = this.value;
  }
}
