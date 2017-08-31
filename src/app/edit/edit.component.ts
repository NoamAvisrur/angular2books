import {Component, Input} from '@angular/core';
import {book} from '../book/book';

@Component({
    selector: 'Edit-button',
    templateUrl: './edit.component.html'
})

export class EditComponent{

    @Input('master') i: number;
    @Input('books') books;

    index: number;
    title:string;
    author:string;
    img:string;
    
    today = new Date().toJSON().split('T')[0];

    setInfo (){
        this.index = this.books.findIndex(book =>  book.id === this.i);
        this.title = this.books[this.index].title;
        this.author = this.books[this.index].author;
        this.date = this.books[this.index].date;
        this.img = this.books[this.index].img;
        console.log(this);
    }
    
    logForm(value: any){
           console.log(value);
           this.books[this.index].title = value.title;
           this.books[this.index].author = value.author;
           this.books[this.index].date = value.date;
           this.books[this.index].img = value.img;
           var selector = '#id' + this.i;
           $(selector).modal('hide');
        }
    }
}