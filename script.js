
function toggleTick(el) {
    const span = el.querySelector('.tick');
    if (span.classList.contains('done')) {
        span.textContent = "○";
        span.classList.remove('done');
    } else {
        span.textContent = "✓";
        span.classList.add('done');
    }
}
function showDashboard() {
    document.querySelector('form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}
