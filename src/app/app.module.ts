import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EarthquakesComponent} from './earthquakes/earthquakes.component';
import {EarthquakeDetailComponent} from './earthquakes/earthquake-detail/earthquake-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import {environment} from '../environments/environment';

const appRoutes: Routes = [
  {path: 'earthquake', component: EarthquakesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    EarthquakeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
