import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageStationComponent } from './components/manage-station/manage-station.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
  { path: '', component: MetricsComponent},
  { path: 'stations', component: StationsComponent},
  { path: 'stations/edit/:id', component: ManageStationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
