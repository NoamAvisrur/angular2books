import {Component, Input,  OnI} from '@angular/core';

@Component({
    selector: 'Edit-button',
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnChanges{
   
    @Input('master') i: [];
    @Input('books') books: []; 
    index: number;
    
    constructor(){
        this.title = 'xxx';
    }

    setInfo(){
         this.index = this.books.findIndex(book =>  book.id === this.i);
         this.title = this.books[this.index].title;
         console.log(this)
         console.log(this.index)
    }    
}