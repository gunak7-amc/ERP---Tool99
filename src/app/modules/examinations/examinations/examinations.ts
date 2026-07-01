import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examinations',
  imports: [],
  templateUrl: './examinations.html',
  styleUrl: './examinations.css',
})
export class Examinations {

  isVisible = true;
  protected readonly title = signal('AMCERP');
  titles: Record<string, string> = {
    dashboard: 'Dashboard',
    ai: 'AI Insights',
    admissions: 'Admissions',
    attendance: 'Attendance',
    exams: 'Examinations',
    timetable: 'Timetable',
    fees: 'Fees & Accounts',
    faculty: 'Faculty & HR',
    hostel: 'Hostel Management',
    transport: 'Transport Management',
    library: 'Library',
    placement: 'Placement Cell',
    alumni: 'Alumni Network',
    reports: 'Reports',
    settings: 'Settings'
  };

  activeSection = 'Examinations';
  activeBottomNav = 'Examinations';
 

  constructor(public router: Router) { }
  bnavIds = ['dashboard', 'admissions', 'fees', 'Attendance','Examinations & Results'];
 

    go(id: string) {
      this.activeSection = id;
      this.router.navigate([id]);

      const titleEl = document.getElementById('page-title');
      if (titleEl) {
        titleEl.textContent = this.titles[id] || id;
      }

      if (window.innerWidth <= 768) {
        this.closeSidebar();
      }
    }
 activeTab = 'Examinations';
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
