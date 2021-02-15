import { IStation } from './station.model';

export interface IMetric {
  best_stations?: IStation[];
  worst_stations?: IStation[];
  number_of_items?: number;
  region_code?: number;
  code_region?: number;
  average_results_by_departement?: any;
}
