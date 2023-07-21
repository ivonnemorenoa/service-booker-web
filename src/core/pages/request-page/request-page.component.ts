import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SystemCatalog } from 'src/app/shared/lib/system-catalog';
import { ControlCheckbox, FormCheckbox, buildFormArrayOptionsForm } from 'src/core/components/form-control-checkbox/form-control-checkbox.component';
import { ControlSelect, FormSelect, buildFormSelect } from 'src/core/components/form-control-select/form-control-select.component';

export function formatHour(hour: number): string {
	if (hour < 0 || hour >= 24) {
		throw new Error('El valor de hora debe estar entre 0 y 23.99.');
	}

	const isAM = hour < 12;
	const ampm = isAM ? 'am' : 'pm';
	const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
	const formattedMinute = hour % 1 === 0.5 ? '30' : '00';

	return `${formattedHour.toString().padStart(2, '0')}:${formattedMinute} ${ampm}`;
}



export interface RequestForm {
	name: FormControl<string | null>;
	phone: FormControl<string | null>;
	date: FormControl<Date | null>;
	time: FormGroup<FormSelect<number>>;
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
	time: ControlSelect<number>,
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
	public get servicesTypes() { return this.services.controls as FormGroup<FormCheckbox<any>>[] };
	public get problem() { return this.form.get('problem') as FormControl; }
	public get address() { return this.form.get('address') as FormControl; }
	public get references() { return this.form.get('references') as FormControl; }
	public get latitudes() { return this.form.get('latitudes') as FormControl; }
	public get longitud() { return this.form.get('longitud') as FormControl; }

	public form: FormGroup<RequestForm>;


	constructor(
		private formBuilder: FormBuilder
	) {


		const inicio = 10;
		const final = 22;
		const intervalo = 2;
		const horas: SystemCatalog<number>[] = [];

		for (let i = inicio; i <= final; i = i + intervalo) {
			horas.push({
				key: i,
				description: formatHour(i)
			});
		}

		console.log(horas);




		this.form = this.formBuilder.group<RequestForm>({
			name: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required]),
			date: new FormControl(new Date(), [this.futureDateValidator]),
			time: buildFormSelect(horas[0]!.key, horas),
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


	futureDateValidator(control: AbstractControl) {
		const selectedDate = new Date(control.value);
		const today = new Date();
		today.setHours(0,0,0,0);
		selectedDate.setHours(0,0,0,0);
		console.log(selectedDate);	
		console.log(today);	

		if (selectedDate.getTime() < today.getTime()) {
			return { pastDate: true };
		}
		return null;
		// return pastel;
	}



	public onSubmit() {
		console.log(this.form.value);
	}

}


