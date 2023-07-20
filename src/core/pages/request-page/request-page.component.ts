import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ControlCheckbox, FormCheckbox, buildFormArrayOptionsForm } from 'src/core/components/form-control-checkbox/form-control-checkbox.component';
import { ControlSelect, FormSelect, buildFormSelect } from 'src/core/components/form-control-select/form-control-select.component';

export interface RequestForm {
	name: FormControl<string | null>;
	phone: FormControl<string | null>;
	date: FormControl<Date | null>;
	time: FormGroup<FormSelect<Date>>;
	services: FormArray<FormGroup<FormCheckbox<string>>>;
	problem: FormControl<string | null>;
	address: FormControl<string | null>;
	references: FormControl<string | null>;
	latitudes: FormControl<number | null>;
	longitud: FormControl<number | null>;
}

export interface RequestFormValue {
	name: string,
	phone: string,
	date: Date,
	time: ControlSelect<Date>,
	services: ControlCheckbox[],
	problem: string,
	address: string,
	references: string,
	latitud: number,
	longitud: number,

  // public formrequest: FormGroup<RequestForm>= this.fb.group<R
}

export type ServiceType = 'MINISPLIT' | 'MAINTANCE';

@Component({
	selector: 'app-request-page',
	templateUrl: './request-page.component.html',
	styleUrls: ['./request-page.component.css']
})

export class RequestPageComponent {

	public get name() { return this.form.controls.name as FormControl; }
	public get phone() { return this.form.get('phone') as FormControl; }
	public get date() { return this.form.get('date') as FormControl; }
	public get time() { return this.form.get('time') as FormGroup; }
	public get services() { return this.form.get('services') as FormArray; }
	public get servicesTypes() { return this.services.controls  as  FormGroup<FormCheckbox<any>>[]};
	public get problem() { return this.form.get('problem') as FormControl; }
	public get address() { return this.form.get('address') as FormControl; }
	public get references() { return this.form.get('references') as FormControl; }
	public get latitudes() { return this.form.get('latitudes') as FormControl; }
	public get longitud() { return this.form.get('longitud') as FormControl; }

	public form: FormGroup<RequestForm>;


	constructor(
		private formBuilder: FormBuilder
	) {

		this.form = this.formBuilder.group<RequestForm>({
			name: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required]),
			date: new FormControl(new Date(), [Validators.required]),
			time: buildFormSelect(new Date(), [{
				key: new Date(),
				description: new Date().toTimeString(),
			}]),
			services: buildFormArrayOptionsForm<string>([{
				key: 's1',
				description: 'servicio mantenimiento 1'
			},
			{
				key: 's2',
				description: 'servicio mantenimiento 2'
			}
			], ['s1']),
			problem: new FormControl('', [Validators.required]),
			address: new FormControl('', [Validators.required]),
			references: new FormControl('', [Validators.required]),
			latitudes: new FormControl(null, [Validators.required]),
			longitud: new FormControl(null, [Validators.required])
		});
	}

	public onSubmit() {
		console.log(this.form.value);
	}

}


