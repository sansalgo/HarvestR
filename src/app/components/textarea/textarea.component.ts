import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  @ViewChild('textareaRef')
  textareaRef!: ElementRef<HTMLTextAreaElement>;

  @Input() placeholder: string = '';

  updateTextareaHeight() {
    const textarea = this.textareaRef.nativeElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
