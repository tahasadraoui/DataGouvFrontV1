import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IStation } from 'src/app/shared/model/station.model';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  stations: IStation[];
  count: number;
  isLoading = false;
  query = '';
  page = 1;
  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<void> {
    await this.loadStations(this.page);
  }

  async loadStations(page: number): Promise<void> {
    this.page = page;
    const offset = 20 * (this.page - 1);
    this.query = `limit=20&offset=${offset}`;
    try {
      this.isLoading = true;
      const stationsResult = await this.api.loadStations(this.query);
      this.stations = stationsResult.results;
      this.count = stationsResult.count;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
