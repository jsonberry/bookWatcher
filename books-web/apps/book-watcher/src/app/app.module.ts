import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
import {NxModule} from '@nrwl/nx'
import {AppComponent} from './app.component'
import {GreyWormCollectionModule} from '@web/grey-worm/collection'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        GreyWormCollectionModule,
        NxModule.forRoot(),
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
