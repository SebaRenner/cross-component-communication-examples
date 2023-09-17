import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectionComponent } from './components/selection/selection.component';
import { DisplayComponent } from './components/display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
