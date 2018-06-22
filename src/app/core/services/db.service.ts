import { Injectable } from '@angular/core';
import { Book } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DbService {

    constructor() { }

    public getBooks(): Book[] {
        var listBooks: Book[] = [];
        for (let index = 1; index < 10; index++) {
            let book = new Book(index, 'Book - ' + index, index * 84, 'Dr. Roger - ' + index);
            listBooks.push(book);
        }
        return listBooks;
    }
}
