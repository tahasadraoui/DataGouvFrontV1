import { IStation } from './station.model';

export interface IMetric {
  best_stations?: IStation[];
  worst_stations?: IStation[];
  number_of_items?: number;
  region_code?: number;
  average_results_by_departement?: IAverageResultsByDepartement[];
  weighted_average_results_by_departement?: IWeightedAverageResultsByDepartement[];
}

export interface IAverageResultsByDepartement {
  avarage_result?: number;
  code_departement?: number;
}

export interface IWeightedAverageResultsByDepartement {
  avarage_result?: number;
  code_departement?: number;
  nb?: number;
}
