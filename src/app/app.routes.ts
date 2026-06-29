import { Routes } from '@angular/router';
import { Dashboard } from './modules/dashboard/dashboard/dashboard';
import { Timetable } from './modules/timetable/timetable/timetable';
import { App } from './app';
import { Admissions } from './modules/admissions/admissions/admissions';
import { Faculty } from './modules/faculty/faculty/faculty';
import { Alumni } from './modules/alumni/alumni/alumni';
import { Attendance } from './modules/attendance/attendance/attendance';
import { Examinations } from './modules/examinations/examinations/examinations';
import { Fees } from './modules/fees/fees/fees';
import { Hostel } from './modules/hostel/hostel/hostel';
import { Library } from './modules/library/library/library';
import { Placement } from './modules/placement/placement/placement';
import { Reports } from './modules/reports/reports/reports';
import { Settings } from './modules/settings/settings/settings';
import { Transport } from './modules/transport/transport/transport';
import { Login } from './modules/login/login/login';



export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'timetable', component: Timetable },
    { path: 'admissions', component: Admissions },
    { path: 'faculty', component: Faculty },
    { path: 'alumni', component: Alumni },
    { path: 'attendance', component: Attendance },
    { path: 'exams', component: Examinations },
    { path: 'fees', component: Fees },
    { path: 'hostel', component: Hostel },
    { path: 'library', component: Library },
    { path: 'placement', component: Placement },
    { path: 'reports', component: Reports },
    { path: 'settings', component: Settings },
     { path: 'transport', component: Transport },

];
