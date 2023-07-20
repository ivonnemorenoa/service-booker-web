import { Component, Input } from '@angular/core';
import { AbstractControlOptions, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { SystemCatalog } from 'src/app/shared/lib/system-catalog';

export function buildFormArrayOptionsForm<T extends string>(options: SystemCatalog<T>[], values: string[], validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[] | null | undefined): FormArray {
	return new FormArray<FormGroup<FormCheckbox<string>>>(options.map(option => {
		return buildFormCheckbox<string>({
			key: option.key,
			description: option.description,
			checked: values.includes(option.key),
		});
	}), validatorOrOpts)
}

export function buildOptionsForm<T extends string>(options: SystemCatalog<T>[], values: string[]): FormGroup {
	return new FormGroup({
		options: buildFormArrayOptionsForm(options, values),
	});
}

export function buildFormCheckbox<T>(value: ControlCheckbox<T>): FormGroup<FormCheckbox<T>> {
	return new FormGroup<FormCheckbox<T>>({
		key: new FormControl<T>(value.key),
		description: new FormControl<string>(value.description),
		checked: new FormControl<boolean>(value.checked),
	});
}

export interface FormCheckbox<T = string> {
	key: FormControl<T | null>;
	description: FormControl<string | null>;
	checked: FormControl<boolean | null>;
}

export interface ControlCheckbox<T = any> {
	key: T;
	description: string;
	checked: boolean
}

@Component({
	selector: 'app-form-control-checkbox',
	templateUrl: './form-control-checkbox.component.html',
	styleUrls: ['./form-control-checkbox.component.scss']
})
export class FormControlCheckboxComponent {
	@Input() id!: string;
	@Input() options!: FormGroup<FormCheckbox<any>>[];
}