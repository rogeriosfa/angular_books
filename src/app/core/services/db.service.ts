import { Injectable } from "@angular/core";
import { Book } from "../models";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DbService {
    constructor() { }

    public listBooks: Book[] = [
        { id: 1, name: "Um Conta da Vida", pagination: 210, author: "Pedro Alves" },
        { id: 2, name: "Mentes Milionárias", pagination: 518, author: "Joaquina Silva M." }
    ];

    public getBooks(): Observable<Book[]> {       
        return of(this.listBooks);
    }

    public addBook(book: Book) {
        this.listBooks.push(book);
        return of(true);
    }
}
