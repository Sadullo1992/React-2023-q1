import { IPhoto } from './photo.model';

export interface SearchResponse {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
