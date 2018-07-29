import {TestBed} from '@angular/core/testing'
import {StoreModule} from '@ngrx/store'
import {provideMockActions} from '@ngrx/effects/testing'
import {DataPersistence} from '@nrwl/nx'
import {hot} from '@nrwl/nx/testing'

import {BooksEffects} from './books.effects'
import {LoadBooks, BooksLoaded} from './books.actions'

import {Observable} from 'rxjs'

describe('BooksEffects', () => {
    let actions$: Observable<any>
    let effects$: BooksEffects

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [
                BooksEffects,
                DataPersistence,
                provideMockActions(() => actions$),
            ],
        })

        effects$ = TestBed.get(BooksEffects)
    })

    describe('someEffect', () => {
        it('should work', () => {
            actions$ = hot('-a-|', {a: new LoadBooks({})})
            expect(effects$.loadBooks$).toBeObservable(
                hot('-a-|', {a: new BooksLoaded({})}),
            )
        })
    })
})
