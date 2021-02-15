import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IStation } from 'src/app/shared/model/station.model';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],
})
export class StationsComponent implements OnInit {
  stations: IStation[];

  querySearch = '';
  codeStationFilter: string | null;
  regionStationFilter: string | null;
  libelleStationFilter: string | null;
  codeDepartementStationFilter: number | null;
  displayFilterClass = true;

  query = '';
  isLoading = false;

  count: number;
  page = 1;
  constructor(private api: ApiService) {}

  async ngOnInit(): Promise<void> {
    await this.loadStations(this.page);
  }

  async loadStations(page: number): Promise<void> {
    this.page = page;
    const offset = 20 * (this.page - 1);
    this.query = `limit=20&offset=${offset}`;
    if (this.querySearch) {
      this.query += this.querySearch;
    }

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

  displayFilter(): void {
    this.displayFilterClass = !this.displayFilterClass;
  }

  queryChange(): void {
    this.querySearch = '';
    if (
      this.codeStationFilter ||
      this.regionStationFilter ||
      this.libelleStationFilter ||
      this.codeDepartementStationFilter
    ) {
      if (this.codeStationFilter) {
        this.querySearch += `&code_station=${this.codeStationFilter}`;
      }
      if (this.regionStationFilter) {
        this.querySearch += `&libelle_region=${this.regionStationFilter}`;
      }
      if (this.libelleStationFilter) {
        this.querySearch += `&libelle_station=${this.libelleStationFilter}`;
      }
      if (this.codeDepartementStationFilter) {
        this.querySearch += `&code_departement=${this.codeDepartementStationFilter}`;
      }
    }
  }

  search(): void {
    this.queryChange();
    this.page = 1;
    this.loadStations(this.page);
  }

  clear(): void {
    this.querySearch = '';
    this.codeStationFilter = null;
    this.regionStationFilter = null;
    this.libelleStationFilter = null;
    this.codeDepartementStationFilter = null;

    this.page = 1;
    this.loadStations(this.page);
  }
}
