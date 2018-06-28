import { Injectable } from "@angular/core";
import { Book } from "../models";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DbService {
    constructor() { }

    public getBooks(): Observable<Book[]> {
        const listBooks: Book[] = [];
        listBooks.push(
            { id: 1, name: "Um Conta da Vida", pagination: 210, author: "Pedro Alves" },
            { id: 2, name: "Mentes Milionárias", pagination: 518, author: "Joaquina Silva M." }
        );
        return of(listBooks);
    }
}
