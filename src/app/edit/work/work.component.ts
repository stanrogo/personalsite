import {Component, OnInit} from '@angular/core';
import {FirebaseEditService} from '../../services/firebaseEdit.service';

@Component({
	selector: 'as-work',
	templateUrl: 'app/edit/work/work.html'
})

export class WorkComponent implements OnInit {

	work;

	constructor(public editService: FirebaseEditService) {}

	ngOnInit() {

		this.work = this.editService.subscribeTo('/work');
		this.editService.subscribeAsArray('/work');

		window.scrollTo(0, 0);
	}

	updateItem(endpoint, index, event) {

		this.editService.updateItem(endpoint, index, event);
	}

	deleteItem(endpoint, index) {

		this.editService.deleteItem(endpoint, index, () => {

			// Do nothing right now
		});
	}
}
