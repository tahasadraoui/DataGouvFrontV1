import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IMetric } from 'src/app/shared/model/metrics.model';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics: IMetric;
  isLoading = false;

  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<void> {
    const postMetrics: Partial<IMetric> = {
      region_code: 76,
    };
    await this.getMetrics(postMetrics);
  }

  async getMetrics(metric: Partial<IMetric>): Promise<void> {
    try {
      this.isLoading = true;
      this.metrics = await this.api.getMetrics(metric);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

}
