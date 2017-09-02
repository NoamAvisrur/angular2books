import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component'


@Component({
    selector: 'my-app',
    template: `<div class="container">
                   <header>
                       <h1>My Comic Books</h1>
                   </header>
                   <my-books></my-books>
               </div>`,
})

export class AppComponent {
}
