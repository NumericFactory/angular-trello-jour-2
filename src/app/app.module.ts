import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

/*
  Décorateur de class
*/
@NgModule(
  {
    declarations: [
      AppComponent,
      CardDetailComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

/* la class app.module */
export class AppModule { }
