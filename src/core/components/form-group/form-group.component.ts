
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormGroupComponent {
	@Input() id: string | undefined;
	@Input() title: string | undefined;
	@Input() required: boolean = true;
	@Input() abstractControl: AbstractControl | FormArray | null | undefined;

	private _errors: string[] = [];
	get errors(): string[] { return this._errors; }

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
	) { }

	public ngOnInit(): void {
		// console.log('FormGroupComponent?.ngOnInit', this.title)
		// this.abstractControl?.valueChanges.subscribe(value => {
		// 	console.log('abstractControl?.statusChanges', this.title)
		// 	this.detectErrors();
		// });
	}

	public ngDoCheck() {
		//todo; better call function
		this.detectErrors();
	}

	detectErrors(): void {
		const errors: string[] = [];
		for (const key in this.abstractControl?.errors) {
			if (key === 'required') {
				continue;
			}

			if (Object.prototype.hasOwnProperty.call(this.abstractControl?.errors, key)) {
				const value = (this.abstractControl?.errors as any)[key] as string;
				errors.push(value);
			}
		}

		this.changeDetectorRef.detectChanges();
		this._errors = errors;
	}
}
