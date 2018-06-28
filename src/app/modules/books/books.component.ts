import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services';
import { Book } from 'src/app/core/models';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    public lists: Array<Book>;

    constructor(
        private dbService: DbService,
    ) { }

    ngOnInit() {
        this.getBooks();
    }

    public getBooks() {
        this.dbService.getBooks().subscribe(
            result => {
                this.lists = result;
            },
            erro => {
                alert('um erro ocorreu');
            }
        );
    }

}
