import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services';
import { Book } from 'src/app/core/models';

@Component({
    selector: 'app-list-books',
    templateUrl: './list-books.component.html',
    styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

    public lists: Array<Book>;

    constructor(
        private dbService: DbService,
    ) { }

    ngOnInit() {
        this.getBooks();
    }

    public getBooks() {
        this.lists = this.dbService.getBooks();
        console.log(this.lists);
    }

}
