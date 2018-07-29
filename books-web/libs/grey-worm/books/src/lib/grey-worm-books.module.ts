import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {GreyWormBookServiceModule} from '@books-web/grey-worm/book-service'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {BooksEffects} from './+state/books.effects'
import {BooksFacade} from './+state/books.facade'
import {booksReducer, initialState} from './+state/books.reducer'

@NgModule({
    imports: [
        CommonModule,
        GreyWormBookServiceModule,
        StoreModule.forFeature('books', booksReducer, {
            initialState,
        }),
        EffectsModule.forFeature([BooksEffects]),
    ],
    providers: [BooksEffects, BooksFacade],
})
export class GreyWormBooksModule {}
