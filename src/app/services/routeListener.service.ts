import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class RouteListenerService {

	routerHook;

	constructor(private router: Router) {

		this.routerHook = router;
	}

	subscribe(callback) {

		this.routerHook.events.subscribe((val) => {

			callback(val);
		});
	}
}
