import { Component, Input } from '@angular/core';
import { book } from '../book/book';

@Component({
    selector: 'Delete-button',
    templateUrl: './delete.component.html'
})

export class DeleteComponent {

    @Input('master') i: number;
    @Input('books') books: book[];
    
    index: number;

    deleteSelectedBook(){
        this.index = this.books.findIndex(book =>  book.id === this.i);
        this.books.splice(this.index, 1);
    };
};
