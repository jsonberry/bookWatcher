import {async, TestBed} from '@angular/core/testing'
import {GreyWormBookModule} from './grey-worm-book.module'

describe('GreyWormBookModule', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [GreyWormBookModule],
            }).compileComponents()
        }),
    )

    it('should create', () => {
        expect(GreyWormBookModule).toBeDefined()
    })
})
