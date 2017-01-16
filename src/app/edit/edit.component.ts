import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FirebaseEditService} from '../services/firebaseEdit.service';
import {RouteListenerService} from '../services/routeListener.service';

export class Tab {

	title;
	endpoint;
	pageLink;

	constructor(title, endpoint, pageLink) {

		this.title = title;
		this.endpoint = endpoint;
		this.pageLink = pageLink;
	}
}

export const editTabs: Array<Tab> = [
	new Tab('Work Experience', '/work', '/edit/work'),
	new Tab('Professional Skills', '/skills', '/edit/skills'),
	new Tab('Articles', '/posts', '/edit/articles')
];

@Component({
	selector: 'as-edit',
	templateUrl: 'app/edit/edit.html'
})

export class EditComponent implements OnInit {

	tabs: Array<Tab> = [];
	activeTab: Tab;

	constructor(
		private authService: AuthService,
		private router: Router,
		private editService: FirebaseEditService,
		private routeListenerService: RouteListenerService
	) {

	}

	ngOnInit() {

		this.checkUserLoggedIn();

		this.routeListenerService.subscribe((val) => {

			if (!(val instanceof NavigationEnd)) {

				return;
			}

			const newPage = val.urlAfterRedirects;

			for (let i = 0; i < this.tabs.length; i++) {

				if (this.tabs[i].pageLink.indexOf(newPage) !== -1) {

					this.activeTab = this.tabs[i];
				}
			}
		});

		this.tabs = editTabs;
		this.activeTab = editTabs[0];


		window.scrollTo(0, 0);
	}

	/**
	 * Checks to see whether the user is logged in or not on this page.
	 *
	 * If not then we will redirect the user to the login page.
	 *
	 * @returns void
	 */

	checkUserLoggedIn() {

		this.authService.subscribeLoggedInState((status: boolean, authorised: boolean) => {

			if (status === true && authorised === true) {

				return;
			}

			this.router.navigate([`/login`]);
		});
	}

	logout() {

		this.authService.logout();
	}

	addItem(item) {

		console.log('adding');

		this.editService.addItem(item);
	}
}
