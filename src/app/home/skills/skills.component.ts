import {Component, OnInit, Inject} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import {SharedService} from '../../services/shared.service';

@Component({
	selector: 'as-skills',
	templateUrl: 'app/home/skills/skills.html'
})

export class SkillsComponent implements OnInit {

	firebase;
	shared: SharedService;

	skills: Array<Object>;

	constructor(private sharedService: SharedService, @Inject(FirebaseApp) firebaseApp: any) {

		this.firebase = firebaseApp;
		this.shared = sharedService;
		this.skills = [];
	}

	ngOnInit(): void {

		this.firebase.database().ref('/skills').on('value', (snapshot) => {

			this.skills = [];
			const data = snapshot.val();

			for (let key in data) {

				if (data.hasOwnProperty(key)) {

					const skill = data[key];

					if (!skill.hasOwnProperty('icon') || skill.icon === '') {

						continue;
					}

					this.shared.getImageURL(skill.icon).then((URL) => {

						this.skills.push({
							imageURL: URL,
							text: skill.text
						});
					});
				}
			}
		});
	}
}
