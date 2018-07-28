import {async, TestBed} from '@angular/core/testing'
import {GreyWormCollectionModule} from './grey-worm-collection.module'

describe('GreyWormCollectionModule', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [GreyWormCollectionModule],
            }).compileComponents()
        }),
    )

    it('should create', () => {
        expect(GreyWormCollectionModule).toBeDefined()
    })
})
