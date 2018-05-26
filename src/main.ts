import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';

declare let __ENV__: string;
if (__ENV__ !== 'dev') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);