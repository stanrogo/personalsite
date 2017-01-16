import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {BlogComponent} from './blog.component';
import {HeroComponent} from './hero/hero.component';
import {FeedComponent} from './feed/feed.component';
import {PostComponent} from './post/post.component';

import {PostResolver} from './post.resolver';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forChild([
			{
				path: 'blog', component: BlogComponent,
				children: [
					{path: '', redirectTo: 'feed', pathMatch: 'full'},
					{path: 'feed', component: FeedComponent},
					{path: ':id', component: PostComponent, resolve: {articleData: PostResolver}}
				]
			}
		])
	],
	declarations: [
		BlogComponent,
		HeroComponent,
		FeedComponent,
		PostComponent
	],
	providers: [
		PostResolver
	],
	exports: [BlogComponent]
})

export class BlogModule {

}
