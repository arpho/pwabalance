import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Plugins, GeolocationOptions } from '@capacitor/core';
const { Geolocation } = Plugins;
import { Coordinates } from '../../models/coordinates';
import { Input } from '@ionic/angular';

@Component({
  selector: 'input-geolocation',
  templateUrl: './input-geolocation.component.html',
  styleUrls: ['./input-geolocation.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputGeolocationComponent),
    }
  ]
})
export class InputGeolocationComponent implements OnInit, ControlValueAccessor {
  public location: Coordinates;
  private disabled = false;
  private onChange: Function = (location: Coordinates) => { };
  private onTouch: Function = () => { };
  writeValue(value: Coordinates) {
    // if value is undefined it fails
    if (!value) { value = new Coordinates({ latitude: 0, longitude: 0, address: '' }); }
    this.location = new Coordinates({ latitude: value.getLatitude(), longitude: value.getLongitude(), address: value.getAddress() });
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
