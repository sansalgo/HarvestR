import { Component, Input } from '@angular/core';
import { CheckboxService } from './checkbox/checkbox.service';

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.css',
  providers: [CheckboxService],
})
export class CheckboxGroupComponent {
  @Input() label: string = '';
}
