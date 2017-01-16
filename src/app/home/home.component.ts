import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'as-home',
	templateUrl: 'app/home/home.html'
})

export class HomeComponent implements OnInit {

	ngOnInit() {

		window.scrollTo(0, 0);
	}
}
