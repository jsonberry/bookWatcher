import {Component, OnInit} from '@angular/core'
import {BooksFacade} from '@books-web/grey-worm/books'

@Component({
    selector: 'web-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
    constructor(private booksFacade: BooksFacade) {}

    ngOnInit() {
        this.booksFacade.loadAll();
    }
}
