import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private apiCall: ApiCallsService) { }
  tes = [1, 2, 3, 4];
  data = {
    count: 0,
    results: []
  };
  ngOnInit() {
    this.apiCall.getDevices((res) => {
      this.data = res;
    }, (err) => {
      console.log(err);
    });
  }
}
