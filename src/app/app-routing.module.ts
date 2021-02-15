import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './components/metrics/metrics.component';

const routes: Routes = [
  { path: '', component: MetricsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
