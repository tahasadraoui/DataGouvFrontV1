import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './components/metrics/metrics.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
  { path: '', component: MetricsComponent},
  { path: 'stations', component: StationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
