import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { SelectionComponent } from './components/selection/selection.component';
import { animalReducer } from './state/animal/animal.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ animal: animalReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
