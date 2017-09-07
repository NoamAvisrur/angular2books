import {Component,Input} from '@angular/core';
import {book} from './book';
import {DataService} from '../data.service';
import {EditComponent} from '../edit/edit.component';
import {CapitalizePipe} from "../capitalize.pipe";
import {DeleteComponent} from '../delete/delete.component';

@Component({
    selector: 'my-book',
    templateUrl: './book.component.html'
})

export class BookComponent{
   
   @Input('books') books: book[];
   
};
