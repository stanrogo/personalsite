import {Component, OnInit} from '@angular/core';
import {FirebaseEditService} from '../../services/firebaseEdit.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'as-article',
	templateUrl: 'app/edit/article/article.html'
})

export class ArticleComponent implements OnInit {

	article = null;
	articleID: number;
	articleContent = {
		name: '',
		summary: '',
		html: '',
		timestamp: '',
		imageURL: ''
	};
	sub;

	constructor(public editService: FirebaseEditService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {

		this.sub = this.route.params.subscribe((params: any) => {

			this.articleID = params.id;

			if (this.article !== null) {

				return;
			}

			this.editService.subscribeTo('/posts/');
			this.article = this.editService.subscribeTo(`/posts/${this.articleID}`);
			this.editService.subscribeAsArray(`/posts/${this.articleID}`);
			this.editService.retrieveEndpointArray(`/posts/${this.articleID}`, (articleContent) => {

				for (let i = 0; i < articleContent.length; i++) {

					if (this.articleContent[articleContent[i].$key] === '') {

						this.articleContent[articleContent[i].$key] = articleContent[i].$value;
					}
				}
			});
		});


		window.scrollTo(0, 0);
	}

	updateItem(endpoint, event) {

		this.editService.updateItem(endpoint, event, this.articleID);
	}

	deleteItem(endpoint) {

		this.editService.deleteItem(endpoint, this.articleID, () => {

			this.router.navigate([`/edit/articles`]);
		});
	}
}
