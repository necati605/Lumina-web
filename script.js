
let users = {};
let water = 0.00;

function toggleAuth(type) {
    document.getElementById("loginForm").style.display = type === 'login' ? "block" : "none";
    document.getElementById("registerForm").style.display = type === 'register' ? "block" : "none";
    document.getElementById("dashboard").style.display = "none";
}

function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    if (users[email]) {
        alert("⚠️ Bu e-posta zaten kayıtlı.");
    } else {
        users[email] = password;
        alert("✅ Kayıt başarılı! Giriş yapabilirsiniz.");
        toggleAuth('login');
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if (users[email] && users[email] === password) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("❌ Hatalı e-posta veya şifre.");
    }
}

function forgotPassword() {
    alert("📨 Şifre sıfırlama bağlantısı gönderildi (simülasyon).");
}

function toggleTask(el) {
    const detail = el.querySelector('.detail');
    const isDone = el.classList.contains('done');
    if (!isDone) {
        el.classList.add('done');
        if (el.textContent.includes("Su iç")) {
            water += 0.25;
            document.getElementById("waterAmount").textContent = water.toFixed(2);
        }
        detail.style.display = "block";
        showCompletionMessage();
    } else {
        el.classList.remove('done');
        if (el.textContent.includes("Su iç")) {
            water = Math.max(0, water - 0.25);
            document.getElementById("waterAmount").textContent = water.toFixed(2);
        }
        detail.style.display = "none";
    }
}

function showCompletionMessage() {
    const msg = document.getElementById("completionMessage");
    msg.style.display = "block";
    setTimeout(() => {
        msg.style.display = "none";
    }, 2000);
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
