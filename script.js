
function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
}

function completeTask(el) {
    const span = el.querySelector('.tick');
    if (!span.classList.contains('done')) {
        span.textContent = "✓";
        span.classList.add('done');
        document.getElementById('completionMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('completionMessage').style.display = 'none';
        }, 2000);
    } else {
        span.textContent = "○";
        span.classList.remove('done');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}
