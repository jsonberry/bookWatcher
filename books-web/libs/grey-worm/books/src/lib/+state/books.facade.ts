import {Injectable} from '@angular/core'

import {Store} from '@ngrx/store'
import {Actions} from '@ngrx/effects'

import {BooksQuery} from './books.selectors'
import {BooksActions} from './books.actions'
import {BooksState} from './books.reducer'

@Injectable({
    providedIn: 'root',
})
export class BooksFacade {
    public allBooks$ = this.store.select(BooksQuery.getAllBooks)

    constructor(private actions$: Actions, private store: Store<BooksState>) {}

    public loadAll(): void {
        this.store.dispatch(new BooksActions.LoadBooks())
    }
}
