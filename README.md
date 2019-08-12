# EarthquakesChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Features of Application

* Checks https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson website and lists the first 100 data form feed
* Every minute recalls the service to get lastes feed of earthquakes. Changes the background color of new data for a minute
* Shows the place of earthquake on Google Maps if you add your own API key
