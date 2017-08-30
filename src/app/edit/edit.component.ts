import {Component, Input} from '@angular/core';

@Component({
    selector: 'Edit-button',
    templateUrl: './edit.component.html'
})

export class EditComponent{
   
    @Input('master') i: [];
    @Input('books') books: []; 
    index: number;
    
    constructor(){
        this.title = 'xxx';
        this.author = 'fff';
    }

    setInfo(){
         this.index = this.books.findIndex(book =>  book.id === this.i);
         this.title = this.books[this.index].title;
         this.author = this.books[this.index].author;
         console.log(this)
         console.log(this.index)
    }    
}