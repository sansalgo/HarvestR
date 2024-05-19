import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
})
export class RadioGroupComponent {
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  private value: string = '';

  get getCheckedValue(): string {
    return this.value;
  }

  set setCheckedValue(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
