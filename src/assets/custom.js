
const titles = {dashboard:'Dashboard',ai:'AI Insights',admissions:'Admissions',attendance:'Attendance',exams:'Examinations & Results',timetable:'Timetable',fees:'Fees & Accounts',faculty:'Faculty & HR',hostel:'Hostel Management',transport:'Transport Management',library:'Library',placement:'Placement Cell',alumni:'Alumni Network',reports:'Reports',settings:'Settings'};

function go(id, el) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  document.getElementById('page-title').textContent = titles[id] || id;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  // close sidebar on mobile after nav
  if(window.innerWidth <= 768) closeSidebar();
}

function switchTab(el, panelId) {
  const tabRow = el.closest('.tab-row');
  tabRow.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const content = tabRow.nextElementSibling;
  let panel = content;
  while (panel) {
    if (panel.classList.contains('tab-panel')) panel.classList.remove('active');
    panel = panel.nextElementSibling;
  }
  const target = document.getElementById(panelId);
  if (target) target.classList.add('active');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  sb.classList.toggle('open');
  ov.classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

function setBottomNav(id) {
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  const target = document.getElementById('bnav-' + id);
  if(target) target.classList.add('active');
}

// Sync bottom nav when sidebar nav items clicked
document.querySelectorAll('#sidebar .nav-item').forEach(item => {
  item.addEventListener('click', function() {
    const bnav_ids = ['dashboard','admissions','fees','attendance'];
    const label = this.textContent.trim().toLowerCase();
    const match = bnav_ids.find(id => label.includes(id.replace('-','')) || label.includes(titles[id]?.toLowerCase() || ''));
    document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
    if(match) { const t = document.getElementById('bnav-'+match); if(t) t.classList.add('active'); }
  });
});
