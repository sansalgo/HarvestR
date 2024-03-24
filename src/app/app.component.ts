import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonComponent } from './components/button/button.component';
import { DisclosureComponent } from './components/disclosure/disclosure.component';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    ButtonGroupComponent,
    DisclosureComponent,
    InputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HarvestR';

  handleButtonClick(): void {
    alert('Button clicked!');
  }
}
