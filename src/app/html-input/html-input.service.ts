import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlInputService {
  private htmlInput: string = '';

  get getHtmlInput() {
    return this.htmlInput;
  }

  set setHtmlInput(value: string) {
    this.htmlInput = value;
  }
}
