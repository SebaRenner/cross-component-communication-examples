import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { animalReducer } from './app/state/animal/animal.reducer';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, StoreModule.forRoot({ animal: animalReducer }))]
})
  .catch(err => console.error(err));
