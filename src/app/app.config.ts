import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withRouterConfig } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { environment } from "../environments/environment.prod";
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideDateFnsAdapter } from '@angular/material-date-fns-adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      })
    ),
    provideDateFnsAdapter(), // Provide the DateFns adapter
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
