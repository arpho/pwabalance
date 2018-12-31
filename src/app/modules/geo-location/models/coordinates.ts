export class Coordinates {
    private latitude: number;
    private longitude: number;
    public getLatitude() {
        return this.latitude;
    }
    public getLongitude() {
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