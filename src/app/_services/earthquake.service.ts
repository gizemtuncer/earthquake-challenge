import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  constructor(private http: HttpClient) {
  }

  getAllData() {
    return this.http.get(environment.earthquakeAPIUrl);
  }

  getDetailData(detailUrl) {
    return this.http.get(detailUrl);
  }

}
