import {Component, OnInit, Inject} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';

@Component({
	selector: 'as-spotlight',
	templateUrl: 'app/home/spotlight/spotlight.html'
})

export class SpotlightComponent implements OnInit {

	ngRouter;
	firebase;
	shared;
	posts: Array<Object>;

	constructor(
		private router: Router,
		@Inject(FirebaseApp) firebaseApp: any,
		private sharedService: SharedService
	) {

		this.ngRouter = router;
		this.firebase = firebaseApp;
		this.shared = sharedService;
		this.posts = [];
	}

	goToBlog(id) {

		if (typeof id === 'undefined') {

			this.ngRouter.navigate(['/blog']);
		} else {

			this.ngRouter.navigate([`/blog/${id}`]);
		}
	}

	ngOnInit(): void {

		this.firebase.database().ref('/posts').on('value', (snapshot) => {

			const data = snapshot.val();
			let tempPosts: Array<any> = [];

			for (let key in data) {

				if (data.hasOwnProperty(key)) {

					data[key].date = SharedService.timeConverter(data[key].timestamp);
					data[key].id = key.substr(1);

					if (data[key].imageURL === '') {

						delete data[key];
						return;
					}

					this.shared.getImageURL(data[key].imageURL).then((url) => {

						data[key].imageURL = url;
						tempPosts.push(data[key]);

						if (Object.keys(data).length === tempPosts.length) {

							tempPosts = SharedService.shuffle(tempPosts);

							this.posts = tempPosts.slice(0, 2);
						}
					});
				}
			}
		});
	}
}
