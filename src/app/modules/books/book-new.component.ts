import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services';
import { Book } from 'src/app/core/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-new',
    templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnInit {

    public book: Book = new Book();

    constructor(
        private dbService: DbService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public onSubmit() {
        this.dbService.addBook(this.book).subscribe(
            result => {
                this.router.navigate(['../'], { relativeTo: this.activatedRoute });
                console.log('sucesso!');
            },
            erro => {
                console.log('erro!');
            }
        )
    }

}
