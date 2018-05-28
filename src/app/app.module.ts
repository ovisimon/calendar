import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { FirstPage } from 'app/first-page/first-page.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/first-page', pathMatch: 'full' },
	{ path: 'first-page', component: FirstPage }
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: false}
			),
		FormsModule
	],
	declarations: [
		AppComponent,
		FirstPage
	],

	providers: [

	],

	bootstrap: [AppComponent]
})

export class AppModule { }
