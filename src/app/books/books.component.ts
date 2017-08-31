import {Component, OnInit} from '@angular/core';
import {book} from '../book/book';
import {BookComponent} from '../book/book.component';
import {DataService} from '../data.service';


@Component({
    selector: 'my-books',
    template: `<div class="row">
                   <h2>i have {{books.length}} books in my list</h2>
                   <my-book></my-book>
               </div>`,
    // directives: [BookComponent],
})

export class BooksComponent implements OnInit{
   constructor(private Data: DataService) { }

   books:book[] = []

   ngOnInit(): void {
      this.books = this.Data.getBooks();
   }
}