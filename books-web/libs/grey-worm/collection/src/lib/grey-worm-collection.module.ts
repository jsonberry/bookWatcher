import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {CollectionComponent} from './collection/collection.component'
import {GreyWormBookModule} from '@web/grey-worm/book'
@NgModule({
    imports: [
        CommonModule,
        GreyWormBookModule,
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
