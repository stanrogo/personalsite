import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders} from 'angularfire2';
import {Observable, Observer} from 'rxjs';

@Injectable()
export class AuthService {

	private user: Observable<Object>;
	private userObserver: Observer<any>;

	constructor(public af: AngularFire) {

		this.user = new Observable(observer => {

			this.userObserver = observer;

			this.af.auth.subscribe((user: any) => {

				if (user && user.uid === 'uuML0xpvcmWjehEKRDCL6spy7RJ3') {

					user.authorised = true;
					this.userObserver.next(user);
				} else if (user && user.uid !== 'uuML0xpvcmWjehEKRDCL6spy7RJ3') {

					this.logout();
					this.userObserver.next({authorised: false});
				} else {

					this.userObserver.next({});
				}
			});
		});
	}

	login() {

		this.af.auth.login({
			provider: AuthProviders.Google
		});
	}

	logout() {

		this.af.auth.logout();
	}


	/**
	 * Subscribe to retrieve the current status of user login
	 *
	 * @param callback
	 * @returns {Subscription}
	 */

	subscribeLoggedInState(callback) {

		return this.user.subscribe((value: any) => {

			let isAuthorised = false;

			if (value.authorised === true) {

				isAuthorised = true;
			}

			if (typeof value.authorised === 'undefined') {

				isAuthorised = null;
			}

			callback(
				Object.keys(value).length !== 0,
				isAuthorised
			);
		});
	}
}
