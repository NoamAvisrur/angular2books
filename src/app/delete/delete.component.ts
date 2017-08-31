import {Component, Input} from '@angular/core';
import {book} from '../book/book';

@Component({
    selector: 'Delete-button',
    template: `<button  type="button" class="button" data-toggle="modal" [attr.data-target]="'#id'+i">Delete</button>
              <div [id]="'id'+i" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Delete a Book</h4>
                        </div>
                        <div class="modal-body">
                            <p>are you sure you want to delete this book?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="delete" class="btn btn-default" data-dismiss="modal" (click)="deleteSelectedBook(d)">yes</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
             </div>`
})

export class DeleteComponent {

    @Input('master') i: number = 0;
    @Input('books') books: [book];

    deleteSelectedBook(){
        console.log(this);
        this.index = this.books.findIndex(book =>  book.id === this.i);
        this.books.splice(this.index, 1);
    }
}
