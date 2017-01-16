import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';

import {HeroComponent} from './hero/hero.component';
import {SpotlightComponent} from './spotlight/spotlight.component';
import {SkillsComponent} from './skills/skills.component';
import {WorkComponent} from './work/work.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		HomeComponent,
		HeroComponent,
		SpotlightComponent,
		SkillsComponent,
		WorkComponent
	],
	exports: [HomeComponent]
})

export class HomeModule {

}
