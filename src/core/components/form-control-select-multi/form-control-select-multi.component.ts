import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormCheckbox } from '../form-control-checkbox/form-control-checkbox.component';

@Component({
	selector: 'app-form-control-select-multi',
	templateUrl: './form-control-select-multi.component.html',
	styleUrls: ['./form-control-select-multi.component.scss']
})
export class FormControlSelectMultiComponent {
	@Input() id!: string;
	@Input() placeholder: string | undefined;
	@Input() options!: FormGroup<FormCheckbox<any>>[];

	get description() { return this.options.filter(value => value.value.checked).map(value => value.value.description).join(', '); }
}
