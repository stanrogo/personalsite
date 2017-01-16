import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'as-post',
	templateUrl: 'app/blog/post/post.html'
})

export class PostComponent implements OnInit, OnDestroy {

	private sub;
	private articleData;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {

		this.sub = this.route.data.subscribe(val => {

			this.articleData = val['articleData'];
		});

		window.scrollTo(0, 0);
	}

	ngOnDestroy() {

		this.sub.unsubscribe();
	}
}
