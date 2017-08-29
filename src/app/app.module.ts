import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component'
import { BookComponent } from './book/book.component';
import {DataService} from './data.service'
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {NewBookComponent} from './add/add.component'
import {CapitalizePipe} from "./capitalize.pipe";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, BooksComponent, BookComponent,DeleteComponent,EditComponent,NewBookComponent, CapitalizePipe ],
  providers: [ DataService, CapitalizePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
