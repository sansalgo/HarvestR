import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  private checkedValue: string = '';

  get getCheckedValue(): string {
    return this.checkedValue;
  }

  set setCheckedValue(value: string) {
    this.checkedValue = value;
  }
}
