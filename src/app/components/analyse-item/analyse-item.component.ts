import { Component, Input, OnInit } from '@angular/core';
import { IAnalyse } from 'src/app/shared/model/analyse.model';

@Component({
  selector: 'app-analyse-item',
  templateUrl: './analyse-item.component.html',
  styleUrls: ['./analyse-item.component.scss']
})
export class AnalyseItemComponent implements OnInit {
  @Input() analyse: IAnalyse;

  constructor() { }

  ngOnInit(): void {
  }

}
