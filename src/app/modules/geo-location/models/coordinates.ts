export class Coordinates {
    private latitude: number;
    private longitude: number;
    getLatitude() {
        return this.latitude;
    }
    getLongitude() {
        return this.longitude;
    }
    setLatitude(latitude: string | number) {
        this.latitude = Number(latitude);
    }

    setLongitude(longitude: string | number) {
        this.longitude = Number(longitude);
    }
    constructor(v: { latitude: number, longitude: number }) {
        this.latitude = v.latitude;
        this.longitude = v.longitude;
    }
}