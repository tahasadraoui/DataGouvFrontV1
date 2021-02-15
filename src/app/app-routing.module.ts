import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysesComponent } from './components/analyses/analyses.component';
import { ManageStationComponent } from './components/manage-station/manage-station.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
  { path: '', component: MetricsComponent },
  { path: 'stations', component: StationsComponent },
  { path: 'stations/edit/:id', component: ManageStationComponent },
  { path: 'stations/:id/analyses', component: AnalysesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
