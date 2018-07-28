import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BookComponent} from './book/book.component'
import {GreyWormBookServiceModule} from '@web/grey-worm/book-service'
@NgModule({
    imports: [CommonModule, GreyWormBookServiceModule],
    declarations: [BookComponent],
    exports: [BookComponent],
})
export class GreyWormBookModule {}
