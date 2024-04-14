import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckboxService {
  private checkedValues: string[] = [];
  constructor() {}

  get getCheckedValues(): string[] {
    return this.checkedValues;
  }

  set setCheckedValues(values: string[]) {
    this.checkedValues = values;
  }
}
