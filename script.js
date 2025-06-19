
let users = {};

function toggleAuth(type) {
    document.getElementById("loginForm").style.display = type === 'login' ? "block" : "none";
    document.getElementById("registerForm").style.display = type === 'register' ? "block" : "none";
    document.getElementById("message").textContent = "";
}

function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    if (users[email]) {
        document.getElementById("message").textContent = "⚠️ Bu e-posta zaten kayıtlı.";
    } else {
        users[email] = password;
        document.getElementById("message").textContent = "✅ Başarıyla kayıt oldunuz. Giriş yapabilirsiniz.";
        toggleAuth('login');
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if (users[email] && users[email] === password) {
        document.getElementById("message").textContent = "🎉 Giriş başarılı! Dashboard'a yönlendiriliyorsunuz...";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        document.getElementById("message").textContent = "❌ Hatalı e-posta veya şifre.";
    }
}

function forgotPassword() {
    document.getElementById("message").textContent = "📨 Şifre sıfırlama bağlantısı gönderildi (simülasyon).";
}
