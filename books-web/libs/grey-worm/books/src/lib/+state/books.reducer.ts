import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import {Book} from 'books-models'
import {BooksActionsUnion, BooksActionTypes} from './books.actions'

export interface BooksState extends EntityState<Book> {}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: (book: Book) => book.rowid,
})

export const initialState: BooksState = adapter.getInitialState()

export function booksReducer(
    state = initialState,
    action: BooksActionsUnion,
): BooksState {
    switch (action.type) {
        case BooksActionTypes.AddBook: {
            return adapter.addOne(action.payload.book, state)
        }

        case BooksActionTypes.UpsertBook: {
            return adapter.upsertOne(action.payload.book, state)
        }

        case BooksActionTypes.AddBooks: {
            return adapter.addMany(action.payload.books, state)
        }

        case BooksActionTypes.UpsertBooks: {
            return adapter.upsertMany(action.payload.books, state)
        }

        case BooksActionTypes.UpdateBook: {
            return adapter.updateOne(action.payload.book, state)
        }

        case BooksActionTypes.UpdateBooks: {
            return adapter.updateMany(action.payload.books, state)
        }

        case BooksActionTypes.DeleteBook: {
            return adapter.removeOne(action.payload.id, state)
        }

        case BooksActionTypes.DeleteBooks: {
            return adapter.removeMany(action.payload.ids, state)
        }

        case BooksActionTypes.LoadBooksSuccess: {
            return adapter.addAll(action.payload.books, state)
        }

        case BooksActionTypes.ClearBooks: {
            return adapter.removeAll({...state})
        }

        default:
            return state
    }
}

export const {
    selectIds: getBooksIds,
    selectEntities: getBooksEntities,
    selectAll: getAllBooks,
    selectTotal: getBooksTotal,
} = adapter.getSelectors()
