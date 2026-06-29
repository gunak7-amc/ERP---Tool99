import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admissions',
  imports: [],
  templateUrl: './admissions.html',
  styleUrl: './admissions.css',
})
export class Admissions {

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

activeSection = 'Admissions';

 constructor(private router: Router) {}

  go1(section: string) {
    this.activeSection = section;
    this.router.navigate([section]);
  }

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
activeTab = 'Admissions';

  switchTab(panelId: string): void {
    this.activeTab = panelId;
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
