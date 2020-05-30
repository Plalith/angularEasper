import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-device-groups',
  templateUrl: './device-groups.component.html',
  styleUrls: ['./device-groups.component.css']
})
export class DeviceGroupsComponent implements OnInit {

  constructor(private apiCall: ApiCallsService) { }
  Data = {
    count: 0,
    results: []
  };
  ngOnInit() {
    this.apiCall.getDevicesGroups((res) => {
      this.Data = res;
    }, (err) => {
      console.log(err);
    });
  }

}
