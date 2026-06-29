import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  imports: [],
  templateUrl: './timetable.html',
  styleUrl: './timetable.css',
})
export class Timetable {


  closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}
toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('sidebar-overlay')?.classList.toggle('open');
}

}
