
let water = 0.00;

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
