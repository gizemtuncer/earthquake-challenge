import {Property} from './Property';
import {Geometry} from './Geometry';

export class Feature {
  id: string;
  properties: Property;
  geometry: Geometry;
  isNew: boolean;
}
