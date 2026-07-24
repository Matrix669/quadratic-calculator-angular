import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/shared/components/App/app.config';
import { App } from './app/shared/components/App/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
