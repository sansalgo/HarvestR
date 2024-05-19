import { Component } from '@angular/core';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { ButtonComponent } from '../components/button/button.component';
import { HtmlInputService } from './html-input.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-input',
  standalone: true,
  imports: [TextareaComponent, ButtonComponent],
  templateUrl: './html-input.component.html',
  styleUrl: './html-input.component.css',
})
export class HtmlInputComponent {
  constructor(
    private htmlInputService: HtmlInputService,
    private router: Router
  ) {}

  value: string = '';

  handleClickEvent() {
    console.log(this.value);
    console.log('clicked form textarea');
    this.htmlInputService.setHtmlInput = this.value;
    this.router.navigate(['/parse']);
  }
}
