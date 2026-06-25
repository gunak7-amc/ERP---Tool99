import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  dashboardStats = [
  {
    title: 'Students',
    value: 4218,
    icon: 'users'
  },
  {
    title: 'Faculty',
    value: 187,
    icon: 'user'
  },
  {
    title: 'Fees Collected',
    value: '₹2.4 Cr',
    icon: 'currency'
  },
  {
    title: 'Attendance',
    value: '82%',
    icon: 'calendar'
  }
];


}
