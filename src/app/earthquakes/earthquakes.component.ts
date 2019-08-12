import {Component, OnInit} from '@angular/core';
import {EarthquakeService} from '../_services/earthquake.service';
import {FeatureCollection} from '../_models/FeatureCollection';
import {Feature} from '../_models/Feature';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.css']
})
export class EarthquakesComponent implements OnInit {
  page = 1;
  pageSize = 20;
  featureCollection: FeatureCollection;
  featureDetail: Feature;
  showDetail = false;
  latitude: number;
  longitude: number;

  constructor(private earthquakeService: EarthquakeService) {
  }

  ngOnInit() {
    this.loadAllData();
    setInterval(() => {
      this.loadAllData();
    }, environment.earthquakeAPIRefreshInterval);
  }

  loadAllData() {
    this.earthquakeService.getAllData()
      .subscribe((data: FeatureCollection) => {
          if (this.featureCollection) {
            for (const feature of data.features) {
              if (!this.featureCollection.features.find(x => x.id === feature.id)) {
                feature.isNew = true;
              } else {
                break;
              }
            }
          }
          this.featureCollection = data;
        },
        error => alert(error));
  }

  getAlertStatus(alertType) {
    if (alertType) {
      switch (alertType) {
        case 'green':
          return 'alert-success';
        case 'yellow':
        case 'orange':
          return 'alert-warning';
        case 'red':
          return 'alert-danger';
      }
    }
  }

  getDetail(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.showDetail = true;
  }
}
