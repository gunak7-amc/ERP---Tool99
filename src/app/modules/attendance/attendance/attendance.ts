import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {

  isVisible = true;
  protected readonly title = signal('AMCERP');
  titles: Record<string, string> = {
    dashboard: 'Dashboard',
    ai: 'AI Insights',
    admissions: 'Admissions',
    attendance: 'Attendance',
    exams: 'Examinations & Results',
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

  activeSection = 'Attendance';
  activeBottomNav = 'Attendance';
 

  constructor(public router: Router) { }
  bnavIds = ['dashboard', 'admissions', 'fees', 'Attendance'];
  go1(section: string) {
    this.activeSection = section;
    this.router.navigate([section]);

    const match = this.bnavIds.find(id =>
      section.toLowerCase().includes(id) ||
      section.toLowerCase().includes(this.titles[id].toLowerCase())
    );

    if (match) {
      this.activeBottomNav = match;
    }
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
 activeTab = 'Attendance';
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

     

  months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  weekDays = ['M','T','W','T','F','S','S'];

  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();

  calendar: any[] = [];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {

    this.calendar = [];

    const year = this.selectedYear;
    const month = this.selectedMonth;

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    let startDay = firstDay === 0 ? 6 : firstDay - 1;

    // Empty cells
    for (let i = 0; i < startDay; i++) {
      this.calendar.push({
        day: '',
        status: 'X'
      });
    }

    for (let day = 1; day <= totalDays; day++) {

      const current = new Date(year, month, day);

      let status = 'P';

      // Saturday & Sunday
      if (current.getDay() === 0 || current.getDay() === 6) {
        status = 'H';
      }

      // Demo Absent Days
      if ([11,20].includes(day)) {
        status = 'A';
      }

      this.calendar.push({
        day,
        status
      });

    }

  }

  previousMonth() {

    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }

    this.generateCalendar();
  }

  nextMonth() {

    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }

    this.generateCalendar();
  }

  monthChanged() {
    this.generateCalendar();
  }

}

