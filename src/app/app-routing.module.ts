import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceGroupsComponent } from './device-groups/device-groups.component';
import { DeviceComponent } from './device/device.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'deviceGroups', component: DeviceGroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
