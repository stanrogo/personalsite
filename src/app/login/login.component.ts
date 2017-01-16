import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
	selector: 'as-login',
	templateUrl: 'app/login/login.html',
	providers: [
		AuthService
	]
})

export class LoginComponent implements OnInit {

	model = new Auth('', '');

	constructor(private authService: AuthService, public router: Router) {

	}

	ngOnInit() {

		this.authService.subscribeLoggedInState((status: boolean, authorised: boolean) => {

			if (authorised === false) {

				const authorisedLbl = document.getElementsByClassName('js-authorised-label')[0];

				authorisedLbl.classList.remove('hidden');
				return;
			}

			if (status === false) {

				return;
			}

			this.router.navigate([`/edit`]);
		});

		window.scrollTo(0, 0);
	}

	login() {

		this.authService.login();
	}
}

export class Auth {

	constructor(
		public username: string,
		public password: string
	) {

	}
}
