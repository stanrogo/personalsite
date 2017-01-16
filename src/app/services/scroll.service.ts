import {Injectable} from '@angular/core';
import {WindowRef} from './window.service';

@Injectable()
export class ScrollService {

	win: any;

	constructor(private winRef: WindowRef) {

		this.win = winRef.nativeWindow;
	}


	scrollTo(yPoint: number, duration: number) {

		setTimeout(() => {

			this.win.scrollTo(0, yPoint);
		}, duration);

		return;
	}

	smoothScroll(eID) {

		const startY = currentYPosition();
		const stopY = elmYPosition(eID);
		const distance = stopY > startY ? stopY - startY : startY - stopY;

		if (distance < 100) {

			this.win.scrollTo(0, stopY);
			return;
		}

		let speed = Math.round(distance / 100);
		if (speed >= 20) {

			speed = 20;
		}

		const step = Math.round(distance / 100);
		let leapY = stopY > startY ? startY + step : startY - step;
		let timer = 0;

		if (stopY > startY) {

			for (let i = startY; i < stopY; i += step) {

				this.scrollTo(leapY, timer * speed);

				leapY += step;

				if (leapY > stopY) {

					leapY = stopY;
				}

				timer++;
			}

			return;
		}
		for (let i = startY; i > stopY; i -= step) {

			this.scrollTo(leapY, timer * speed);

			leapY -= step;

			if (leapY < stopY) {

				leapY = stopY;
			}

			timer++;
		}
	}
}


function currentYPosition() {

	// Firefox, Chrome, Opera, Safari
	if (self.pageYOffset) {

		return self.pageYOffset;
	}

	// Internet Explorer 6 - standards mode
	if (document.documentElement && document.documentElement.scrollTop) {

		return document.documentElement.scrollTop;
	}

	// Internet Explorer 6, 7 and 8
	if (document.body.scrollTop) {

		return document.body.scrollTop;
	}

	return 0;
}

function elmYPosition(eID) {

	const elm = document.getElementById(eID);
	let y = elm.offsetTop;
	let node = elm;

	while (node.offsetParent && node.offsetParent !== document.body) {
		node = <HTMLElement>node.offsetParent;
		y += node.offsetTop;
	}

	return y;
}
