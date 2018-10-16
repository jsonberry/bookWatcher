import {Component, Input} from '@angular/core'
import {Book} from 'books-models'

@Component({
    selector: 'books-web-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    @Input() public book: Book
}
