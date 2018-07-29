import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {
    RouterModule,
    Routes,
    Params,
    RouterStateSnapshot,
} from '@angular/router'
import {NxModule} from '@nrwl/nx'
import {AppComponent} from './app.component'
import {GreyWormCollectionModule} from '@books-web/grey-worm/collection'
import {StoreModule, ActionReducerMap} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {
    StoreRouterConnectingModule,
    routerReducer,
    RouterReducerState,
    RouterStateSerializer,
} from '@ngrx/router-store'
import {storeFreeze} from 'ngrx-store-freeze'

export interface RouterStateUrl {
    url: string
    params: Params
    queryParams: Params
}

export interface State {
    router: RouterReducerState<RouterStateUrl>
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root

        while (route.firstChild) {
            route = route.firstChild
        }

        const {url, root: {queryParams}} = routerState
        const {params} = route

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return {url, params, queryParams}
    }
}
export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        GreyWormCollectionModule,
        NxModule.forRoot(),
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
        StoreModule.forRoot(reducers, {
            metaReducers: !environment.production ? [storeFreeze] : [],
        }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
        }),
    ],
    providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
    bootstrap: [AppComponent],
})
export class AppModule {}
