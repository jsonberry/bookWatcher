import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksActions } from './books.actions';
import { BooksState } from './books.reducer';
import { BooksQuery } from './books.selectors';

@Injectable({
    providedIn: 'root',
})
export class BooksFacade {
    public allBooks$ = this.store.select(BooksQuery.getAllBooks)

    constructor(private store: Store<BooksState>) {}

    public loadAll(): void {
        this.store.dispatch(new BooksActions.LoadBooks())
    }
}
