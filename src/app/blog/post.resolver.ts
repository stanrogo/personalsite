import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {FirebaseApp} from 'angularfire2';
import {SharedService} from '../services/shared.service';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class PostResolver implements Resolve<any> {

	private firebase;
	private shared;

	constructor(private sharedService: SharedService, @Inject(FirebaseApp) firebaseApp: any) {

		this.firebase = firebaseApp;
		this.shared = sharedService;
	}

	resolve(route: ActivatedRouteSnapshot): Promise<any> {

		return new Promise((resolve, reject) => {

			const id = `-${route.params['id']}`;

			this.firebase.database().ref(`/posts/${id}`).on('value', (snapshot) => {

				const articleData = snapshot.val();

				if (articleData.imageURL === '') {

					resolve(articleData);
					return;
				}

				this.shared.getImageURL(articleData.imageURL).then((url) => {

					articleData.imageURL = url;
					resolve(articleData);
				});
			});
		});
	}
}
