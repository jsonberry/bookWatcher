import {Component, OnInit} from '@angular/core'
import {ApiService} from '@web/grey-worm/book-service'

@Component({
    selector: 'web-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getAllBooks().subscribe(params => {
            console.log(params)
        })

        this.api.getBooksByAuthor('Kurt Vonnegut').subscribe(params => {
            console.log(params)
        })
    }
}
