import {Component, OnInit} from '@angular/core';
import {FirebaseEditService} from '../../services/firebaseEdit.service';

@Component({
	selector: 'as-articles',
	templateUrl: 'app/edit/articles/articles.html'
})

export class ArticlesComponent implements OnInit {

	posts;
	postsArray;

	constructor(public editService: FirebaseEditService) {}

	ngOnInit() {

		this.posts = this.editService.subscribeTo('/posts');
		this.editService.subscribeAsArray('/posts');
		this.editService.retrieveEndpointArray('/posts', (array) => {

			this.postsArray = array;
		});

		window.scrollTo(0, 0);
	}

	updateItem(endpoint, index, event) {

		this.editService.updateItem(endpoint, index, event);
	}

	deleteItem(endpoint, index) {

		this.editService.deleteItem(endpoint, index, () => {

			// Do nothing for now
		});
	}
}
