import {Component, OnInit} from '@angular/core'
import {BooksFacade} from '@books-web/grey-worm/books'
import {Observable} from 'rxjs'
import {Book} from 'books-models'

@Component({
    selector: 'web-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
    public books$: Observable<Book[]>

    constructor(private booksFacade: BooksFacade) {}

    ngOnInit() {
        this.booksFacade.loadAll()
        this.books$ = this.booksFacade.allBooks$
    }
}
