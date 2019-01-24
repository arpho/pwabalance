import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  actualVersion: string;

  constructor(public http: HttpClient,
    public storage: Storage) {
    this.getPackage().subscribe(data => {
      this.actualVersion = data['version'];

    });
    console.log('versione', this.actualVersion);
  }

  version2Number(version) {
    console.log('converting', version);
    const splittedVersion = version.split('.');
    const Version = Number(splittedVersion[0]) +
      Number(splittedVersion[1]) / 10 +
      Number(splittedVersion[2]) / 100 +
      Number(splittedVersion[3]) / 1000;
    return Version;
  }


  getPackage() {
    return this.http.get('assets/package.json');
  }
  async areThereNews() {
    const previous_version = await this.storage.get('version');
    console.log('prev version', previous_version);
    console.log('actual ver', this.version2Number(this.actualVersion));

    return (!previous_version) || this.version2Number(this.actualVersion) > this.version2Number(previous_version);
  }

}

