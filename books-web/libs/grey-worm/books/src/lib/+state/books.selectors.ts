import {createSelector, createFeatureSelector} from '@ngrx/store'
import * as fromBooks from './books.reducer'

export const getBooksState = createFeatureSelector<fromBooks.BooksState>(
    'books',
)

export const getBooksIds = createSelector(
    getBooksState,
    fromBooks.getBooksIds,
)
export const getBookEntities = createSelector(
    getBooksState,
    fromBooks.getBooksEntities,
)
export const getAllBooks = createSelector(
    getBooksState,
    fromBooks.getAllBooks,
)
export const getBooksTotal = createSelector(
    getBooksState,
    fromBooks.getBooksTotal,
)

export const BooksQuery = {
    getBooksIds,
    getBookEntities,
    getAllBooks,
    getBooksTotal,
}
