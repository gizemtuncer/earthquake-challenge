import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-earthquake-detail',
  templateUrl: './earthquake-detail.component.html',
  styles: ['agm-map { height: 300px; }']
})
export class EarthquakeDetailComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;

  constructor() { }

  ngOnInit() {
  }

}
