import { Component, signal } from '@angular/core';
import { AdmissionsRoutingModule } from "./modules/admissions/admissions-routing-module";
import { CommonModule, NgIf } from '@angular/common';

import { DashboardModule } from './modules/dashboard/dashboard-module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdmissionsRoutingModule,CommonModule, DashboardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

   isVisible = true;
  protected readonly title = signal('AMCERP');  
  titles: Record<string, string> = {
  dashboard:'Dashboard',
  ai:'AI Insights',
  admissions:'Admissions',
  attendance:'Attendance',
  exams:'Examinations & Results',
  timetable:'Timetable',
  fees:'Fees & Accounts',
  faculty:'Faculty & HR',
  hostel:'Hostel Management',
  transport:'Transport Management',
  library:'Library',
  placement:'Placement Cell',
  alumni:'Alumni Network',
  reports:'Reports',
  settings:'Settings'
};

activeSection = 'dashboard';

go(id: string) {
  this.activeSection = id;

  const titleEl = document.getElementById('page-title');
  if (titleEl) {
    titleEl.textContent = this.titles[id] || id;
  }

  if (window.innerWidth <= 768) {
    this.closeSidebar();
  }
}
closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}
toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('sidebar-overlay')?.classList.toggle('open');
}
  
}
