import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {EditComponent} from './edit.component';

import {WorkComponent} from './work/work.component';
import {SkillsComponent} from './skills/skills.component';

import {AuthService} from '../services/auth.service';
import {FirebaseEditService} from '../services/firebaseEdit.service';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: 'edit', component: EditComponent,
				children: [
					{path: '', redirectTo: 'work', pathMatch: 'full'},
					{path: 'work', component: WorkComponent},
					{path: 'skills', component: SkillsComponent},
					{path: 'articles', component: ArticlesComponent},
					{path: 'articles/:id', component: ArticleComponent}
				]
			}
		])
	],
	declarations: [
		EditComponent,
		WorkComponent,
		SkillsComponent,
		ArticlesComponent,
		ArticleComponent
	],
	providers: [
		AuthService,
		FirebaseEditService
	],
	exports: [EditComponent]
})

export class AdminModule {

}
