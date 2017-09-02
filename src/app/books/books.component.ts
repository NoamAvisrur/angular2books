import {Component,Input, OnInit} from '@angular/core';
import {book} from '../book/book';
import {BookComponent} from '../book/book.component';
import { NewBookComponent } from './add/add.component'
import {DataService} from '../data.service';


@Component({
    selector: 'my-books',
    template: `<div class="row">
                   <h2>i have {{books.length}} books in my list</h2>
                   <my-book [books]="books"></my-book>
               </div>
               <div class="row">
                   <my-new-book [books]="books"></my-new-book>  
               </div>`
})

export class BooksComponent implements OnInit{
   constructor(private Data: DataService) { }

   books:book[] = []

   ngOnInit(){
       this.getBooks();
   }

   getBooks(){
       this.Data.getBooks().subscribe(
           books => this.books = books
       );
   }
}