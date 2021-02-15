export interface ISyncEntities {
  asked_operation?: string;
  region_code?: number;
  entities_found?: number;
  entities_created?: number;
  entities_failed_to_create?: number;
  entities_failed_to_create_or_update?: number;
  entities_updated?: number;
  date_debut_prelevement?: Date;
}
