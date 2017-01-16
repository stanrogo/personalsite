import {Component, OnInit} from '@angular/core';
import {FirebaseEditService} from '../../services/firebaseEdit.service';
import {SharedService} from '../../services/shared.service';

@Component({
	selector: 'as-skills',
	templateUrl: 'app/edit/skills/skills.html',

})

export class SkillsComponent implements OnInit {

	skills;
	skillsArray;
	shared: SharedService;

	constructor(public editService: FirebaseEditService, sharedService: SharedService) {

		this.shared = sharedService;
	}

	ngOnInit() {

		this.skills = this.editService.subscribeTo('/skills');
		this.editService.subscribeAsArray('/skills');
		this.editService.retrieveEndpointArray('/skills', (result) => {

			this.skillsArray = result;

			for (let i = 0; i < this.skillsArray.length; i++) {

				const skill = this.skillsArray[i];

				if (!skill.hasOwnProperty('icon')) {

					return;
				}

				this.shared.getImageURL(skill.icon).then((url) => {

					skill.imageURL = url;
				});
			}
		});

		window.scrollTo(0, 0);
	}

	fileChanged(fileInput: any, index: number) {

		if (!(fileInput.target.files && fileInput.target.files[0])) {

			return;
		}

		const file = fileInput.target.files[0];
		this.shared.uploadImage(file).then((snapshot) => {

			// Success! Now store the file ref in the indexed object

			this.editService.updateDefinedItem('/skills', index, {icon: file.name});

			console.log('File uploaded immediately. I think this is better.');
		});
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
