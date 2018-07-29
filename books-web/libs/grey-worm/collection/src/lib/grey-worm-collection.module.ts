import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {CollectionComponent} from './collection/collection.component'
import {GreyWormBookModule} from '@books-web/grey-worm/book'
import {GreyWormBooksModule} from '@books-web/grey-worm/books'

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
