import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IStation } from 'src/app/shared/model/station.model';

@Component({
  selector: 'app-manage-station',
  templateUrl: './manage-station.component.html',
  styleUrls: ['./manage-station.component.scss']
})
export class ManageStationComponent implements OnInit {
  station: IStation;
  isLoading = false;
  isLocked = false;
  constructor(private activatedRoute: ActivatedRoute, private route: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async param => {
      this.isLoading = true;
      const stationId = +param.id;
      try {
        this.station = await this.api.loadStation(stationId);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    });
  }

  async submit(): Promise<void> {
    try {
      this.isLocked = true;
      const stationId = this.station.id;
      const station: Partial<IStation> = {
        code_departement: this.station.code_departement,
        code_region: this.station.code_region,
        code_station: this.station.code_station,
        libelle_region: this.station.libelle_region,
        libelle_station: this.station.libelle_station,
      };
      await this.api.patchStation(stationId, station);
      this.route.navigate(['/stations']);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLocked = false;
    }
  }
}
