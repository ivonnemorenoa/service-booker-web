import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


export interface RequestForm{
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
  date: FormControl<string | null>;
  hour: FormControl<string | null>;
  }

  export interface RequestFormValue {
    name: string;
    phone: string;
    date: string;
    hour: string;
  }
@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})

export class RequestPageComponent {

  // public formrequest: FormGroup<RequestForm>= this.fb.group<R
}
