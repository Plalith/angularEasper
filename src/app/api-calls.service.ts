import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }


  // Constants

  key = 'CtlmtMO8ES1BK9HgNHlzKyoc6WAJSn';
  EnterpriseID = 'fe66c0a8-e2ee-491c-b931-bb7e32cafe79';


  // API URLs
  getDeviceURL = `https://zctse-api.esper.cloud/api/v1/enterprise/${this.EnterpriseID}/device`;
  getDeviceGRpURL = `https://zctse-api.esper.cloud/api/v1/enterprise/${this.EnterpriseID}/devicegroup`;
  getEnterprisedetails = 'https://zctse-api.esper.cloud/api/v1/enterprise/{enterprise_id}/';
  // api header
  httpOptions = {
    headers: new HttpHeaders({ Authorization: `Bearer ${this.key}` })
  };

  // functions
  getDevices(success, response) {
    return this.http.get(this.getDeviceURL, this.httpOptions).subscribe(success, response);
  }
  getDevicesGroups(success, response) {
    return this.http.get(this.getDeviceGRpURL, this.httpOptions).subscribe(success, response);
  }
}
