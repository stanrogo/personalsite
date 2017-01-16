import {NgModule}      from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {AppComponent} from './app.component';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

import {HomeModule} from './home/home.module';
import {BlogModule} from './blog/blog.module';
import {AdminModule} from './edit/edit.module';

import {WindowRef} from './services/window.service';
import {SharedService} from './services/shared.service';
import {RouteListenerService} from './services/routeListener.service';

export const firebaseConfig = {
	apiKey: 'AIzaSyAAw8mgtcXvkKNQQW0ZK5S9eqvV6zLJUy0',
	authDomain: 'stanrogo-c5c02.firebaseapp.com',
	databaseURL: 'https://stanrogo-c5c02.firebaseio.com',
	storageBucket: 'stanrogo-c5c02.appspot.com'
};

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HomeModule,
		BlogModule,
		AdminModule,
		AngularFireModule.initializeApp(firebaseConfig, {
			provider: AuthProviders.Google,
			method: AuthMethods.Popup
		}),
		RouterModule.forRoot([
			{path: '', redirectTo: 'home', pathMatch: 'full'},
			{path: 'home', component: HomeComponent},
			{path: 'login', component: LoginComponent}
		])
	],
	declarations: [
		AppComponent,
		LoginComponent,
		NavbarComponent,
		FooterComponent
	],
	providers: [
		WindowRef,
		SharedService,
		RouteListenerService,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}
