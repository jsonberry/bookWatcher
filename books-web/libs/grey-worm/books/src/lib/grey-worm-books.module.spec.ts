import {async, TestBed} from '@angular/core/testing'
import {GreyWormBooksModule} from './grey-worm-books.module'

describe('GreyWormBooksModule', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [GreyWormBooksModule],
            }).compileComponents()
        }),
    )

    it('should create', () => {
        expect(GreyWormBooksModule).toBeDefined()
    })
})
