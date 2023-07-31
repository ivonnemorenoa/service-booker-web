import { Component } from '@angular/core';


export type DirectionType = 'left' | 'right';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
	private position = 0;
	private stopped: boolean = false;
	private direction: DirectionType = 'right';
	private inTransition: boolean = false;
	private sliderTrack!: HTMLElement | null | undefined;
	private images: Element[] = [];
	private widthCard: number = 0;
	constructor() { }

	ngAfterViewInit() {
		this.sliderTrack = document.getElementById('sliderTrack');

		if (!this.sliderTrack) {
			return;
		}

		this.images = [...Array.from(this.sliderTrack.children)];
		this.widthCard = this.sliderTrack.clientWidth / 3;
		this.sliderTrack.style.transition = 'transform 0.2s linear';
		this.sliderTrack.style.transform = `translateX(-${this.widthCard}px)`;

		setInterval(() => {
			if (!this.stopped) {
				this.moveSlider(this.direction);
			}
		}, 7000);
	}

	onMouseEnter() {
		this.stopped = true;
	}

	onMouseLeave() {
		this.stopped = false;
	}

	public moveSlider(direction: DirectionType) {
		this.direction = direction;
		if (this.inTransition || !this.sliderTrack) {
			return;
		}
		this.inTransition = true;

		if (direction === 'left') {
			this.sliderTrack.style.transform = `translateX(${0}px)`;
		} else {
			this.sliderTrack.style.transform = `translateX(${-this.widthCard * 2}px)`;
		}

		setTimeout(() => {
			if (!this.sliderTrack) {
				return;
			}

			
			if (direction === 'left') {
				this._moveToLeft();
			} else {
				this._moveToRight();
			}
			this.sliderTrack.style.transition = 'none';
			this.sliderTrack.style.transform = `translateX(-${this.widthCard}px)`;

			setTimeout(() => {

				if (!this.sliderTrack) {
					return;
				}

				this.sliderTrack.style.transition = 'transform 0.2s linear';
				this.inTransition = false;
			}, 10);

		}, 300);
	}



	private _moveToLeft() {
		if (!this.sliderTrack) {
			return;
		}

		if (this.sliderTrack.lastElementChild) {
			this.sliderTrack.removeChild(this.sliderTrack.lastElementChild);
		}

		const toFind = (this.position + this.images.length - 1) % this.images.length;
		this.sliderTrack.prepend(this.images[toFind].cloneNode(true));

		this.position--;
		if (this.position == -1) {
			this.position = this.images.length - 1;
		}
	}

	private _moveToRight() {
		if (!this.sliderTrack) {
			return;
		}

		if (this.sliderTrack.firstChild) {
			this.sliderTrack.removeChild(this.sliderTrack.firstChild);
		}
		this.sliderTrack.append(this.images[this.position].cloneNode(true));
		this.position++;
		if (this.position === this.images.length) {
			this.position = 0;
		}
	}
}
