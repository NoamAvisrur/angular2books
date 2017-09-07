import {Component, Input} from '@angular/core';
import {book} from '../book/book';

declare const jQuery: any;

@Component({
    selector: 'Edit-button',
    templateUrl: './edit.component.html'
})

export class EditComponent{

    @Input('master') i: number;
    @Input('books') books: book[];
    
    show: boolean = false;
    
    index: number;
    title:string;
    author:string;
    img:string;
    date:string;
    
    today = new Date().toJSON().split('T')[0];

    setInfo (){
        this.index = this.books.findIndex(book =>  book.id === this.i);
        this.title = this.books[this.index].title;
        this.author = this.books[this.index].author;
        this.date = this.books[this.index].date;
        this.img = this.books[this.index].img;
    };
    
    logForm(value: any){
        let found;
        this.books.forEach(function(book: book, i:number){
            if(book.title == value.title && this.title !== value.title ){
                found = true;
            };
        }.bind(this));
        if(found){
            this.show = true;
            console.log(found);
        }else{
             this.books[this.index].title = value.title;
             this.books[this.index].author = value.author;
             this.books[this.index].date = value.date;
             this.books[this.index].img = value.img;
             let selector = '#edit' + this.i;
             jQuery(selector).modal('hide');
             this.show = false;
        };
    };
};