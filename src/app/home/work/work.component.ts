import {Component, Inject, OnInit} from '@angular/core';
import {FirebaseApp} from 'angularfire2';

@Component({
	selector: 'as-work',
	templateUrl: 'app/home/work/work.html'
})

export class WorkComponent implements OnInit {

	private firebase;
	private workArray: Array<Object>;

	constructor(@Inject(FirebaseApp) FirebaseApp: any) {

		this.firebase = FirebaseApp;
		this.workArray = [];
	}

	ngOnInit(): void {

		this.firebase.database().ref('/work').on('value', (snapshot) => {

			this.workArray = [];

			const data = snapshot.val();

			for (let key in data) {

				if (data.hasOwnProperty(key)) {

					this.workArray.push(data[key]);
				}
			}
		});
	}
}
