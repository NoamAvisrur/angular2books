import { Injectable } from '@angular/core';
import {book} from './book/book';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

   var BOOKS: book[] = [
   {
       "id": 1,
       "title": "marvel<> legacy",
       "author": "jasoN aron",
       "date": "2015-04-15",
       "img": "http://nerdist.com/wp-content/uploads/2017/06/Marvel-Legacy-1-featured.jpg"
   },
   {
       "id": 2,
       "title": "batMan white knight",
       "author": "maRk waid",
       "date": "2016-07-10",
       "img": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Batman_Detective_Comics_Vol_2_1.png/250px-Batman_Detective_Comics_Vol_2_1.png"
   },
   {
       "id": 3,
       "title": "gotham city garage",
       "author": "collin $kelly",
       "date": "2017-09-11",
       "img": "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/559744/559744._SX1280_QL80_TTD_.jpg"
   },
   {
       "id": 4,
       "title": "amazing spider-man",
       "author": "sten lee",
       "date": "2007-05-13",
       "img": "http://www.collectededitions.com/marvel/omnibus/images/750-ASMOMNIV3HC_KANE_col.jpg"
   },
   {
       "id": 5,
       "title": "superio#r spider-man",
       "author": "dan solte",
       "date": "2014-06-18",
       "img": "http://i.kinja-img.com/gawker-media/image/upload/s--IwSbaf4s--/iftmpwz14zmudqgh22pu.jpg"
   },
   {
       "id": 6,
       "title": "action comics@",
       "author": "jerome siegel",
       "date": "1938-06-15",
       "img": "https://upload.wikimedia.org/wikipedia/en/5/5a/Action_Comics_1.jpg"
   }
]


export class DataService {

    //constructor(private _http: Http){}
    
    //getBooks(): Observable<book[]>{
    //    return this._http
    //    .get    
    //}
    
    
    getBooks(): book[] {
        return BOOKS;
    }
}
