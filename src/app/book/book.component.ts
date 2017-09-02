import {Component,Input, OnInit} from '@angular/core';
import {book} from './book';
import {DataService} from '../data.service';
import {EditComponent} from '../edit/edit.component';
import {CapitalizePipe} from "../capitalize.pipe";
import {DeleteComponent} from '../delete/delete.component';

@Component({
    selector: 'my-book',
    template: `<div class="book col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-1" *ngFor="let book of books; let i = index; trackBy: trackByFn">
                    <h5>{{book.title | capitalize }}</h5>
                    <img src={{book.img}} alt="img"/>
                    <kbd (click)="console(i)">{{book.date}}</kbd>
                    <h6>by {{book.author | capitalize }}</h6>
                    <div class="button_wrapper">
                        <Delete-button [master]="book.id" [books]="books"></Delete-button>
                        <Edit-button [master]="book.id" [books]="books"></Edit-button>
                    </div>
            </div>`
})

export class BookComponent implements OnInit{
   
   @Input('books') books;
   
}
