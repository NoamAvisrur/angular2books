import {Component, Input} from '@angular/core';
import {DataService} from '../data.service';
import {book} from '../book/book';

declare const jQuery: any;

@Component({
    selector: 'my-new-book',
    templateUrl: './add.component.html'
})

export class NewBookComponent{
   constructor(private Data: DataService) { }

   @Input('books') books: book[];
   
   today = new Date().toJSON().split('T')[0];

   show = false;
   newId: number = 0;

   logForm(value: any){
        let found;
        this.books.forEach(function(book, i){
            if(book.title == value.title){
                found = true;
            };
        });
       if(found){
           this.show = true;
       }else{
            if(this.books.length){
                this.newId = this.books[this.books.length-1].id + 1;
            }else{this.newId = 1};    
            this.books.push({
                 id: this.newId,
                 title: value.title,
                 author: value.author,
                 date: value.date,
                 img: value.img
            });
            jQuery('#Add').modal('hide');
            this.show = false;
        };
    };
};