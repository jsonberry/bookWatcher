import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {GreyWormBookModule} from '@books-web/grey-worm/book'
import {GreyWormBooksModule} from '@books-web/grey-worm/books'
import {CollectionComponent} from './collection/collection.component'

@NgModule({
    imports: [
        CommonModule,
        GreyWormBookModule,
        GreyWormBooksModule,
        RouterModule.forChild([
            {
                path: 'collection',
                pathMatch: 'full',
                component: CollectionComponent,
            },
        ]),
    ],
    declarations: [CollectionComponent],
})
export class GreyWormCollectionModule {}
