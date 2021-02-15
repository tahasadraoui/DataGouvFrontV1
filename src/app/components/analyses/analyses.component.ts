import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IAnalyse } from 'src/app/shared/model/analyse.model';
import { IStation } from 'src/app/shared/model/station.model';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.scss'],
})
export class AnalysesComponent implements OnInit {
  station: IStation;
  stationId: number;
  analyses: IAnalyse[];

  query = '';
  isLoading = false;

  count: number;
  page = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private api: ApiService
  ) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (param) => {
      this.isLoading = true;
      const stationId = +param.id;
      this.stationId = +param.id;
      try {
        await this.loadAnalysesByStation(this.page);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    });
  }

  async loadAnalysesByStation(page: number): Promise<void> {
    this.page = page;
    const offset = 20 * (this.page - 1);
    this.query = `limit=20&offset=${offset}&station=${this.stationId}`;

    try {
      this.isLoading = true;
      const analysesResult = await this.api.loadAnalysesByStation(this.query);
      this.analyses = analysesResult.results;
      this.count = analysesResult.count;
      console.log(this.count);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
