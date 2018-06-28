import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { BooksComponent } from './modules/books/books.component';
import { BookNewComponent } from 'src/app/modules/books/book-new.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/new', component: BookNewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
