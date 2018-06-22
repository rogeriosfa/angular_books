import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { ListBooksComponent } from './modules/list-books/list-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
