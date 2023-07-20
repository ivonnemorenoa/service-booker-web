import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormControlOptions, FormControlState, FormGroup, ValidatorFn } from '@angular/forms';
import { SystemCatalog } from 'src/app/shared/lib/system-catalog';



export function buildFormSelect<T>(value: T | FormControlState<T>, opts: SystemCatalog<T>[], validatorOrOpts?: FormControlOptions | ValidatorFn | ValidatorFn[] | null | undefined): FormGroup<FormSelect<T>> {
	return new FormGroup<FormSelect<T>>({
		value: new FormControl<T>(value, validatorOrOpts),
		options: new FormArray<FormGroup<FormSelectOption<T>>>(
			opts.map(option => buildFormSelectOption(option))
		)
	});
}

export function buildFormSelectOption<T>(value: ControlSelectOption<T>): FormGroup<FormSelectOption<T>> {
	return new FormGroup<FormSelectOption<T>>({
		key: new FormControl<T>(value.key),
		description: new FormControl<string>(value.description),
	});
}

export interface FormSelect<T = string> {
	value: AbstractControl<T | null>;
	options: FormArray<FormGroup<FormSelectOption<T>>>;
}

export interface FormSelectOption<T = string> {
	key: AbstractControl<T | null>;
	description: AbstractControl<string | null>;
}

export interface ControlSelectOption<T = string> {
	key: T,
	description: string;
}
export interface ControlSelect<T = string> {
	value: T;
	options: ControlSelectOption<T>[]
}

@Component({
	selector: 'app-form-control-select',
	templateUrl: './form-control-select.component.html',
	styleUrls: ['./form-control-select.component.scss']
})
export class FormControlSelectComponent {
	@Input() id!: string;
	@Input() formGroup!: FormGroup<FormSelect<any>>;

	public get options(): FormGroup<FormSelectOption>[] { return this.formGroup.controls.options.controls }
	public get value(): AbstractControl { return this.formGroup.controls.value }


	get description() {
		return this.options.filter(option => option.value.key === this.value.value).map(option => option.controls.description.value).join('');
	}


	public onSelect(option: FormGroup<FormSelectOption>) {
		this.value.setValue(option.controls.key.value);
	}
}
