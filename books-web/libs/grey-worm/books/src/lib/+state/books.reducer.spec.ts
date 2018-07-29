import {BooksLoaded} from './books.actions'
import {booksReducer, initialState} from './books.reducer'

describe('booksReducer', () => {
    it('should work', () => {
        const action: BooksLoaded = new BooksLoaded({})
        const actual = booksReducer(initialState, action)
        expect(actual).toEqual({})
    })
})
