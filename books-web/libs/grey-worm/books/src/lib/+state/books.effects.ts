import {Injectable} from '@angular/core'
import {Actions, Effect} from '@ngrx/effects'
import {
    BooksActionTypes,
    LoadBooks,
    LoadBooksSuccess,
    LoadBooksFailure,
} from './books.actions'
import {BooksState} from './books.reducer'
import {DataPersistence} from '@nrwl/nx'
import {ApiService} from '@books-web/grey-worm/book-service'
import {map} from 'rxjs/operators'

@Injectable()
export class BooksEffects {
    @Effect()
    loadBooks$ = this.dataPersistence.fetch(BooksActionTypes.LoadBooks, {
        run: (action: LoadBooks, state: BooksState) => {
            return this.api
                .getAllBooks()
                .pipe(map(({data: books}) => new LoadBooksSuccess({books})))
        },
        onError: (action: LoadBooks, error) => {
            return new LoadBooksFailure({error})
        },
    })

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<BooksState>,
        private api: ApiService,
    ) {}
}
