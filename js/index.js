function toggleSection(hd) {
    hd.closest('.collapsible-section').classList.toggle('collapsed');
}

const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

function showDay(id, jsDay) {
    document.querySelectorAll('.day-plan').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.semana-dia').forEach(d => d.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('btn-' + id).classList.add('active');
}

// Highlight today automatically
const today = new Date().getDay(); // 0=Sun,1=Mon,...,6=Sat
const todayId = days[today];
document.getElementById('btn-' + todayId).classList.add('today');

// Show today's plan by default
showDay(todayId, today);
