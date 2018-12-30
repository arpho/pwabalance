import { Injectable } from '@angular/core';
import { Plugins, GeolocationOptions } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  async getPosition() {

    const options: GeolocationOptions = {};
    options.enableHighAccuracy = true;
    const coordinates = await Geolocation.getCurrentPosition(options);
    return coordinates;
  }
}
