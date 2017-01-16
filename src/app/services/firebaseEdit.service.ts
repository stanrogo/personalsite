/**
 * A simple service to perform CRUD operations on a firebase database.
 *
 * Allows the user to subscribe to an endpoint, upon which CRUD functionality becomes available.
 *
 * @file firebaseEdit.service.ts
 * @author stanrogo
 * @version 1.0.0
 */

import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseEditService {

	private endpointObservables: Object = {};
	private endpointArrays: Object = {};

	constructor(private af: AngularFire) { }

	/**
	 * Allows subscription to a particular endpoint in firebase when called.
	 * This allows the view of the chosen component to bind to this list.
	 *
	 * After this is initialised, CRUD functionality is available.
	 *
	 * @param endpoint
	 *
	 * @returns
	 */

	subscribeTo(endpoint: string) {

		this.endpointObservables[endpoint] = <FirebaseListObservable<any[]>>this.af.database.list(endpoint);
		return this.endpointObservables[endpoint];
	}

	/**
	 * Subscribe to retrieve an array of objects of a particular endpoint whenever something changes
	 *
	 * Mainly used for indexing purposes so we can acquire a reference to a particular item
	 *
	 * @param endpoint
	 *
	 * @returns void
	 */

	subscribeAsArray(endpoint: string) {

		this.endpointObservables[endpoint].subscribe(snapshots => {

			this.endpointArrays[endpoint] = snapshots;
		});
	}

	/**
	 * Retrieve a subscribed array to listen to in the using component
	 *
	 * @param endpoint
	 * @param callback
	 * @returns {any|Object|undefined|AnonymousSubscription|Subscription}
	 */

	retrieveEndpointArray(endpoint: string, callback: Function) {

		return this.endpointObservables[endpoint].subscribe(snapshots => {

			callback(snapshots);
		});
	}

	updateDefinedItem(endpoint: string, index: number, data: Object) {

		const itemRef: string = this.endpointArrays[endpoint][index].$key;
		const updatePromise: Promise<any> = this.endpointObservables[endpoint].update(itemRef, data);

		updatePromise.then(() => {

			console.log('success!');
		}).catch(err => {

			alert('unable to update ' + err);
		});
	}

	/**
	 * Update an item on firebase.
	 *
	 * This function will get the input and textarea fields of the form that the submit button is contained in.
	 * It will then create key value pairs for all of the inputs and update these on firebase
	 *
	 * @param {string} endpoint
	 * @param {Event} event
	 * @param {number} [index]
	 *
	 * @returns void
	 */

	updateItem(endpoint: string, event: Event, index: number|string) {

		event.preventDefault();

		const target: HTMLElement = <HTMLElement>event.target;
		const form: HTMLElement = <HTMLElement>target.parentNode;
		const formID: string = form.getAttribute('id');
		let itemRef: string;

		if (typeof index === 'string') {

			itemRef = index;
		} else {

			itemRef = this.endpointArrays[endpoint][index].$key;
		}


		const formFields: Array<any> = Array.prototype.slice.call(
			document.querySelectorAll(`#${formID} input:not([type="file"]), #${formID} textarea`)
		);

		const kvpairs: Object = {};

		for (let i = 0; i < formFields.length; i++) {

			let field: HTMLInputElement = <HTMLInputElement>formFields[i];
			kvpairs[field.name] = field.value;
		}

		const updatePromise: Promise<any> = this.endpointObservables[endpoint].update(itemRef, kvpairs);

		updatePromise.then(() => {

			console.log('success!');
		}).catch(err => {

			alert('unable to update ' + err);
		});
	}

	/**
	 * Delete an item from firebase.
	 *
	 * Simply calls the remove function on an observable list which then returns a promise of either success or error
	 *
	 * @param {string} endpoint
	 * @param {number|string} index
	 * @param {Function} [callback]
	 *
	 * @returns void
	 */

	deleteItem(endpoint: string, index: number|string, callback) {

		event.preventDefault();

		let itemRef: string;

		if (typeof index === 'string') {

			itemRef = index;
		} else {

			itemRef = this.endpointArrays[endpoint][index].$key;
		}

		const deletePromise: Promise<any> = this.endpointObservables[endpoint].remove(itemRef);

		deletePromise.then(() => {

			console.log('deleted from ', endpoint);

			if (callback) {

				callback();
			};
		}).catch(err => {

			alert('unable to update ' + err);
		});
	}


	/**
	 * Adds a new blank item to firebase.
	 *
	 * Pushes a blank title property upon add for simplicity sake.
	 * Most objects stored are bound to have a title property but this can be edited at a later stage.
	 *
	 * @param {string} endpoint
	 *
	 * @returns void
	 */

	addItem(endpoint: string) {

		const addPromise: Promise<any> = this.endpointObservables[endpoint].push({title: 'New Article'});
		console.log('added to ', endpoint);

		addPromise.then(() => {

			console.log('added to ', endpoint);
		}).catch(err => {

			alert('unable to add ' + err);
		});
	}
}
