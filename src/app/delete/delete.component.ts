import {Component, Input} from '@angular/core';

@Component({
    selector: 'Delete-button',
    template: `<button  type="button" class="button" data-toggle="modal" (click)="setId()" data-target="#Delete">Delete</button>
              <div id="Delete" class="modal fade" role="dialog">
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
    
    @Input('master') i: [];
    @Input('books') books: [];
        
    setId(){
       document.querySelector('#delete').dataset.id = this.i;
    }
    
    deleteSelectedBook(){
        this.id = parseInt(document.querySelector('#delete').dataset.id));
        this.index = this.books.findIndex(book =>  book.id === this.id);
        this.books.splice(this.index, 1);  
    }
}
