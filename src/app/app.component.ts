import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component'
import { NewBookComponent } from './add/add.component'

@Component({
    selector: 'my-app',
    template: `<div class="container">
                   <header>
                       <h1>My Comic Books</h1>
                   </header>
                   <my-books></my-books>
                   <my-new-book></my-new-book>
               </div>`,
    // directives: [BooksComponent, NewBookComponent]
})

export class AppComponent {
}
