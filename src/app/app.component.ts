import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.pug',
	styleUrls: [ 'app.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	title: string = 'Basic App';
}
