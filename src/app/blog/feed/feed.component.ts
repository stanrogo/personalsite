import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseApp} from 'angularfire2';
import {SharedService} from '../../services/shared.service';

@Component({
	selector: 'as-feed',
	templateUrl: 'app/blog/feed/feed.html'
})

export class FeedComponent implements OnInit {

	ngRouter;
	firebase;
	posts: Array<Object>;

	constructor(
		private router: Router,
		@Inject(FirebaseApp) firebaseApp: any
	) {

		this.ngRouter = router;
		this.firebase = firebaseApp;
		this.posts = [];
	}

	goToPost(num) {

		this.ngRouter.navigate([`/blog/${num}`]);
	}


	ngOnInit(): void {

		window.scrollTo(0, 0);


		this.firebase.database().ref('/posts').on('value', (snapshot) => {

			this.posts = [];
			let tempPosts = [];

			const data = snapshot.val();

			for (let key in data) {

				if (data.hasOwnProperty(key)) {

					data[key].date = SharedService.timeConverter(data[key].timestamp);
					data[key].id = key.substr(1);

					tempPosts.push(data[key]);
				}
			}

			tempPosts.sort((a, b) => {

				let order;
				a.timestamp > b.timestamp ? order = -1 : order = 1;
				return order;
			});

			this.posts = tempPosts;
		});
	}

}
