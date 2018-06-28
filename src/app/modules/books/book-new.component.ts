import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services';
import { Book } from 'src/app/core/models';

@Component({
    selector: 'app-book-new',
    templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnInit {

    constructor(
        private dbService: DbService,
    ) { }

    ngOnInit() {
    }

}
