import { Component, Input, OnInit } from '@angular/core';
import { IStation } from 'src/app/shared/model/station.model';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {

  @Input() station: IStation;

  constructor() { }

  ngOnInit(): void {
  }

}
