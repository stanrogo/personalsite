import {Injectable, Inject} from '@angular/core';
import {FirebaseApp} from 'angularfire2';

@Injectable()
export class SharedService {

	private firebase;

	static timeConverter(UNIX_timestamp) {

		const a = new Date(UNIX_timestamp * 1000);
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const year = a.getFullYear();
		const month = months[a.getMonth()];
		const date = a.getDate();
		let stringDate;

		if (date === 1 || (date % 10 === 1 && date !== 11)) {


			stringDate = `${date}st`;
		} else if (date === 2 || (date % 10 === 2 && date !== 12)) {

			stringDate = `${date}nd`;
		} else if (date === 3 || (date % 10 === 3 && date !== 13)) {

			stringDate = `${date}rd`;
		} else {

			stringDate = `${date}th`;
		}

		return stringDate + ' ' + month + ' ' + year;
	}

	public static shuffle(o: Array<any>) {

		o.sort(function() {

			return 0.5 - Math.random();
		});

		return o;
	}

	constructor(@Inject(FirebaseApp) firebaseApp: any) {

		this.firebase = firebaseApp;
	}

	public getImageURL(image) {

		const storageRef = this.firebase.storage().ref().child(image);

		return storageRef.getDownloadURL().then(url => {

			return url;
		});
	}

	public uploadImage(image) {

		const storageRef = this.firebase.storage().ref();
		const imageRef = storageRef.child(image.name);

		return imageRef.put(image);
	}
}
