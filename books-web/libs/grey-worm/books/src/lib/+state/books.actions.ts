import {Action} from '@ngrx/store'
import {Update} from '@ngrx/entity'
import {Book} from 'books-models'

export enum BooksActionTypes {
    AddBook = '[Books] Add Book',
    AddBooks = '[Books] Add Books',
    ClearBooks = '[Books] Clear Books',
    DeleteBook = '[Books] Delete Book',
    DeleteBooks = '[Books] Delete Books',
    LoadBooks = '[Books] Load Books',
    LoadBooksFailure = '[Books] Load Books Failure',
    LoadBooksSuccess = '[Books] Load Books Success',
    UpdateBook = '[Books] Update Book',
    UpdateBooks = '[Books] Update Books',
    UpsertBook = '[Books] Upsert Book',
    UpsertBooks = '[Books] Upsert Books',
}

export class AddBook implements Action {
    readonly type = BooksActionTypes.AddBook
    constructor(public payload: {book: Book}) {}
}

export class AddBooks implements Action {
    readonly type = BooksActionTypes.AddBooks
    constructor(public payload: {books: Book[]}) {}
}

export class ClearBooks implements Action {
    readonly type = BooksActionTypes.ClearBooks
}

export class DeleteBook implements Action {
    readonly type = BooksActionTypes.DeleteBook
    constructor(public payload: {id: string}) {}
}

export class DeleteBooks implements Action {
    readonly type = BooksActionTypes.DeleteBooks
    constructor(public payload: {ids: string[]}) {}
}

export class LoadBooks implements Action {
    readonly type = BooksActionTypes.LoadBooks
}

export class LoadBooksSuccess implements Action {
    readonly type = BooksActionTypes.LoadBooksSuccess
    constructor(public payload: {books: Book[]}) {}
}

export class LoadBooksFailure implements Action {
    readonly type = BooksActionTypes.LoadBooksFailure
    constructor(public payload: {error: any}) {}
}

export class UpdateBook implements Action {
    readonly type = BooksActionTypes.UpdateBook
    constructor(public payload: {book: Update<Book>}) {}
}

export class UpdateBooks implements Action {
    readonly type = BooksActionTypes.UpdateBooks
    constructor(public payload: {books: Update<Book>[]}) {}
}

export class UpsertBook implements Action {
    readonly type = BooksActionTypes.UpsertBook
    constructor(public payload: {book: Update<Book>}) {}
}

export class UpsertBooks implements Action {
    readonly type = BooksActionTypes.UpsertBooks
    constructor(public payload: {books: Update<Book>[]}) {}
}

export type BooksActionsUnion =
    | AddBook
    | AddBooks
    | ClearBooks
    | DeleteBook
    | DeleteBooks
    | LoadBooks
    | LoadBooksFailure
    | LoadBooksSuccess
    | UpdateBook
    | UpdateBooks
    | UpsertBook
    | UpsertBooks

export const BooksActions = {
    AddBook,
    AddBooks,
    ClearBooks,
    DeleteBook,
    DeleteBooks,
    LoadBooks,
    LoadBooksFailure,
    LoadBooksSuccess,
    UpdateBook,
    UpdateBooks,
    UpsertBook,
    UpsertBooks,
}
