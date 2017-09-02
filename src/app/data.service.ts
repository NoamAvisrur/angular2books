import { Injectable, Inject } from '@angular/core';
import {book} from './book/book';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

    constructor(@Inject(Http) private http: Http){}
    
    getBooks(): Observable<book[]>{
        return this.http.get('../data/books.json')
            .map((response: Response) => <book[]> response.json());    
    }
}
