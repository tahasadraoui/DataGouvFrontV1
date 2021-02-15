import { Time } from '@angular/common';
import { IStation } from './station.model';

export interface IRAnalyse {
  count: number;
  results: IAnalyse[];
}

export interface IAnalyse {
  id?: number;
  station: IStation;
  nom_producteur?: string;
  code_producteur?: string;
  nom_reseau?: string;
  code_reseau?: string;
  incertitude_analytique?: number;
  resultat?: number;
  date_analyse?: Date;
  heure_analyse?: Time;
}
