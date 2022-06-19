import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export class Constants {
    private static isLocalTest = false
    static baseURL = Constants.isLocalTest ? "http://localhost:5000/" : "https://bsite.net/philotes/"
}
