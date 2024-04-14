import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
})
export class RadioGroupComponent {
  @Input() label: string = '';
}
