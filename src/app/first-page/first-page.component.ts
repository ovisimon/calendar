import { Component } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: 'first-page.pug',
  styleUrls: [ 'first-page.scss' ]
})

export class FirstPage {
  componentName: string = "FirstPage";

  constructor() {

  }

  ngOnInit(): void {

  }
}
