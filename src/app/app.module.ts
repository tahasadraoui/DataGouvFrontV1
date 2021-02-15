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
import { ManageStationComponent } from './components/manage-station/manage-station.component';
import { FormsModule } from '@angular/forms';
import { AnalysesComponent } from './components/analyses/analyses.component';
import { AnalyseItemComponent } from './components/analyse-item/analyse-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent,
    StationsComponent,
    StationItemComponent,
    ManageStationComponent,
    AnalysesComponent,
    AnalyseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ApiService, { provide: 'API_URL', useFactory: () => document.location.origin }],
  bootstrap: [AppComponent]
})
export class AppModule { }
