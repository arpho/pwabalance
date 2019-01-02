import { Injectable } from '@angular/core';
import { Plugins, GeolocationOptions, GeolocationPosition } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private timeoutExpired: boolean;
  private oldLocation: GeolocationPosition;


  constructor() {
    this.timeoutExpired = true;
  }
  /**
   *set a timeout 
   @param t: number timeout in millisecs
   @boolean: returns true when   the timeout is set, otherwise return false
   *
   * @param {number} t
   * @returns
   * @memberof GeoService
   */
  setTimeout(t: number) {

    if (this.timeoutExpired) {
      setTimeout(() => {
        this.timeoutExpired = true;
      }, t);
      this.timeoutExpired = false;
      return true;
    } else {
      return false;
    }


  }

  async getPosition() {

    const options: GeolocationOptions = {};
    options.enableHighAccuracy = true;
    if (this.setTimeout(300000)) {
      this.oldLocation = await Geolocation.getCurrentPosition(options);
      return this.oldLocation;
    } else {
      return this.oldLocation;
    }
  }
}
