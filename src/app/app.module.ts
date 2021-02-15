import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, { provide: 'API_URL', useFactory: () => document.location.origin }],
  bootstrap: [AppComponent]
})
export class AppModule { }
