import { Component,Input, OnInit} from '@angular/core';
import { book } from '../book/book';
import { BookComponent } from '../book/book.component';
import { NewBookComponent } from '../add/add.component';
import { DataService } from '../data.service';

@Component({
    selector: 'my-books',
    templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit{
    constructor(private Data: DataService) { }

    books:book[] = [];

    ngOnInit(){
        this.getBooks();
    };

    getBooks(){
        this.Data.getBooks().subscribe(
            books => this.books = books
        );
    };
};