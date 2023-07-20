import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';

export interface ContactForm {
	name: FormControl<string | null>;
	email: FormControl<string | null>;
	phone: FormControl<string | null>;
	comments: FormControl<string | null>;
}
export interface ContactFormValue {
	name: string;
	email: string;
	phone: string;
	comments: string;
}
@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

	public form: FormGroup<ContactForm> = this.formBuilder.group<ContactForm>({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
		comments: new FormControl('', [Validators.required]),
	});

	constructor(
		private formBuilder: FormBuilder
	) {



	}

	ngAfterViewInit() {


	}

	onSubmit() {
		console.log(this.form.value.name);

	}
}

