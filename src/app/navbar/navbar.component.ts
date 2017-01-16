import {Component} from '@angular/core';
import {RouteListenerService} from '../services/routeListener.service';
import {NavigationEnd} from '@angular/router';

@Component({
	selector: 'as-navbar',
	templateUrl: 'app/navbar/navbar.html',
})

export class NavbarComponent {

	smoothScroll;
	hideBlog = false;

	constructor(private routeListenerService: RouteListenerService) {

		routeListenerService.subscribe((val) => {

			if (val instanceof NavigationEnd && val.url.indexOf('/blog') !== -1) {

				this.hideBlog = false;
			} else {

				this.hideBlog = true;
			}
		});
	}

	toggleMenu() {

		const menu = document.getElementsByClassName('js-menu-mobile')[0];

		if (menu.classList.contains('active')) {

			menu.classList.remove('active');
		} else {

			menu.classList.add('active');
		}
	}
}
