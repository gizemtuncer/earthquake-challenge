import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'U.S. Geological Survey';

  redirectToEarthquakes() {
    this.title = 'sdfsdf';
  }
}
