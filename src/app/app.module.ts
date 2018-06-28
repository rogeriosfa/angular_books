import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { BooksComponent } from './modules/books/books.component';
import { HomeComponent } from './modules/home/home.component';
import { BookNewComponent } from 'src/app/modules/books/book-new.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BooksComponent,
        BookNewComponent,
    ],
    imports: [
        FormsModule,
        AppRoutingModule,
        BrowserModule,
        MaterializeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
