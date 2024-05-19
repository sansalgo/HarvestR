import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [RadioGroupComponent, RadioComponent],
  imports: [CommonModule, BadgeComponent],
  providers: [],
  exports: [RadioGroupComponent, RadioComponent],
})
export class RadioGroupModule {}
