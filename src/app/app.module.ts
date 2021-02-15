import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { StationsComponent } from './components/stations/stations.component';
import { StationItemComponent } from './components/station-item/station-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent,
    StationsComponent,
    StationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ApiService, { provide: 'API_URL', useFactory: () => document.location.origin }],
  bootstrap: [AppComponent]
})
export class AppModule { }
