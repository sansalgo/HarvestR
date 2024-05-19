import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AccordionModule } from '../components/accordion/accordion.module';
import { CheckboxGroupComponent } from '../components/checkbox-group/checkbox-group.component';
import { CheckboxComponent } from '../components/checkbox-group/checkbox/checkbox.component';
import { CodeComponent } from '../components/code/code.component';
import { InputComponent } from '../components/input/input.component';
import { RadioGroupModule } from '../components/radio-group/radio-group.module';
import { HtmlInputService } from '../html-input/html-input.service';
import { ParseService } from './parse.service';

interface ResponseObject {
  selector: string;
  preview: string[];
  types: string[];
  combinators: string[];
  ids: string[];
  classes: string[];
  attributeNames: string[];
  attributeValues?: unknown[];
  attrComparisons?: string[];
}

@Component({
  selector: 'app-parse',
  standalone: true,
  imports: [
    AccordionModule,
    RadioGroupModule,
    CheckboxGroupComponent,
    CheckboxComponent,
    CodeComponent,
    InputComponent,
  ],
  templateUrl: './parse.component.html',
  styleUrl: './parse.component.css',
})
export class ParseComponent implements OnInit {
  data: ResponseObject = {
    selector: '',
    preview: [],
    types: [],
    ids: [],
    classes: [],
    attributeNames: [],
    combinators: [],
  };

  selector: string = '';

  constructor(
    private htmlInputService: HtmlInputService,
    private parseService: ParseService,
    private router: Router
  ) {
    if (!htmlInputService.getHtmlInput) {
      // router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.parseService
      .parse(this.selector)
      .pipe(
        catchError(error => {
          console.log(error);
          throw error;
        })
      )
      .subscribe(response => {
        console.log(response);
        this.data = response;
        this.selector = this.data.selector;
      });
  }

  log(value: string) {
    console.log('--->', value);
    this.selector = this.selector + this.data.combinators[1] + value;
    this.parseService
      .parse(this.selector)
      .pipe(
        catchError(error => {
          console.log(error);
          throw error;
        })
      )
      .subscribe(response => {
        console.log(response);
        this.data = response;
        this.selector = this.data.selector;
      });
  }
}
