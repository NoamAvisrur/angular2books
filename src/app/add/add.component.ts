import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';



@Component({
    selector: 'my-new-book',
    templateUrl: './add.component.html',
    directives: [],           
})

export class NewBookComponent implements OnInit{
   constructor(private Data: DataService) { }
   
   today = new Date().toJSON().split('T')[0];
   
   show = false
   
   logForm(value: any){
        var found;
        this.books.forEach(function(book, i){
            if(book.title == value.title){
                found = true;
            }
        })
       if(found){
           console.log('same name');
           this.show = true;
       }else{
            this.newId = this.books[this.books.length-1].id + 1;
            this.books.push({
                 id: this.newId,
                 title: value.title,
                 author: value.author,
                 date: value.date,
                 img: value.img     
            });
            $('#Add').modal('hide');
            this.show = false;
        }    
    }
   
   ngOnInit(): void {
      this.books = this.Data.getBooks();
   } 
}