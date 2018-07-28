import {async, TestBed} from '@angular/core/testing'
import {GreyWormBookServiceModule} from './grey-worm-book-service.module'

describe('GreyWormBookServiceModule', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [GreyWormBookServiceModule],
            }).compileComponents()
        }),
    )

    it('should create', () => {
        expect(GreyWormBookServiceModule).toBeDefined()
    })
})
