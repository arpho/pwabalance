import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Plugins, GeolocationOptions } from '@capacitor/core';
const { Geolocation } = Plugins;
import { Coordinates } from '../../models/coordinates';

@Component({
  selector: 'input-geolocation',
  templateUrl: './input-geolocation.component.html',
  styleUrls: ['./input-geolocation.component.scss']
})
export class InputGeolocationComponent implements OnInit, ControlValueAccessor {
  public location: Coordinates;
  private onChange: Function = (location: Coordinates) => { };
  private onTouch: Function = () => { };
  private disabled: boolean = false;
  writeValue(value: Coordinates) {
    this.location = new Coordinates({ latitude: value.getLatitude(), longitude: value.getLongitude() });
    this.onChange(this.location);

  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  async geolocalize() {
    const options: GeolocationOptions = {};
    options.enableHighAccuracy = true;
    const coordinates = await Geolocation.getCurrentPosition(options);
    console.log('Current', coordinates);
    console.log(typeof coordinates.coords.latitude);
    const location: Coordinates = new Coordinates(coordinates.coords);
    this.writeValue(location);
  }

  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  ngOnInit() {
  }

}
