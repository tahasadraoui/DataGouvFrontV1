export interface IRStation {
  count: number;
  results: IStation[];
}

export interface IStation {
  id?: number;
  results_average?: number;
  code_station?: string;
  libelle_station?: string;
  code_departement?: number;
  code_region?: number;
  libelle_region?: string;
  uri_station?: string;
}
