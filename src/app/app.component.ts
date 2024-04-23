import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonComponent } from './components/button/button.component';
import { DisclosureComponent } from './components/disclosure/disclosure.component';
import { InputComponent } from './components/input/input.component';
import { AccordionModule } from './components/accordion/accordion.module';
import { RadioGroupModule } from './components/radio-group/radio-group.module';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './components/checkbox-group/checkbox/checkbox.component';
import { CodeComponent } from './components/code/code.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    ButtonGroupComponent,
    DisclosureComponent,
    InputComponent,
    AccordionModule,
    RadioGroupModule,
    CheckboxGroupComponent,
    CheckboxComponent,
    CodeComponent,
    TextareaComponent,
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
