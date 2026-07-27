const presets = document.querySelectorAll('.preset');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const checkbox = document.getElementById('agree');
const donateButton = document.getElementById('tipBtn');
const daBtn = document.getElementById('daBtn');
const API_BASE_URL = "https://hubproject-production-a4ff.up.railway.app";
const DA_URL = "https://www.donationalerts.com/r/andrewautotv";

// preset buttons logic
presets.forEach(btn => {
    btn.addEventListener('click', () => {
        presets.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        amountInput.value = btn.dataset.amount;
    });
});

// ensure minimum amount = 1
amountInput.addEventListener('input', () => {
    if (amountInput.value < 1) amountInput.value = 1;
});

// policy checkbox enables both buttons
checkbox.addEventListener('change', () => {
    donateButton.disabled = !checkbox.checked;
    daBtn.disabled = !checkbox.checked;
});

// Stripe checkout
donateButton.addEventListener('click', async () => {
    const currentParams = new URLSearchParams(window.location.search);
    const currentSource = Number(currentParams.get("src")) || 0;

    const payload = {
        amount: Number(amountInput.value),
        currency: currencySelect.value,
        fromName: document.getElementById('fromName').value || null,
        message: messageInput.value || null,
        source: currentSource
    };

    console.log("Payload to send:", payload);

    try {
        const response = await fetch(`${API_BASE_URL}/api/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            alert("Failed to create checkout");
            return;
        }

        const data = await response.json();
        window.location.href = data.checkoutUrl;
    } catch (error) {
        console.error("Error:", error);
        alert("Connection error");
    }
});

// Donation Alerts button — track click then open DA in new tab
daBtn.addEventListener('click', () => {
    const currentParams = new URLSearchParams(window.location.search);
    const src = Number(currentParams.get("src")) || 0;

    try {
        const url = `${API_BASE_URL}/api/metrics/da-click?src=${src}`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(url);
        } else {
            fetch(url, { method: "POST", keepalive: true }).catch(() => {});
        }
    } catch (_) {}

    window.open(DA_URL, '_blank', 'noopener,noreferrer');
});

const currencySymbols = {
    GBP: '£',
    EUR: '€',
    USD: '$'
};

function updateCurrencySymbols() {
    const currency = currencySelect.value;
    const symbol = currencySymbols[currency];

    presets.forEach(btn => {
        const amountEl = btn.querySelector('.preset-amount');
        if (!amountEl) return;

        if (btn.classList.contains('wide')) {
            amountEl.textContent = `${symbol}50+`;
        } else {
            amountEl.textContent = `${symbol}${btn.dataset.amount}`;
        }
    });
}

currencySelect.addEventListener('change', updateCurrencySymbols);

function updateDaBtn(lang) {
    daBtn.style.display = lang === 'ru' ? '' : 'none';
}

document.addEventListener('langchange', (e) => {
    updateCurrencySymbols();
    updateDaBtn(e.detail.lang);
});

updateCurrencySymbols();
updateDaBtn(localStorage.getItem('lang') || 'en');

const messageInput = document.getElementById('message');
const charHint = document.getElementById('charHint');

messageInput.addEventListener('input', () => {
    charHint.hidden = messageInput.value.length < 250;
});

// ================================
// PAGE VIEW TRACKING
// ================================
(function trackPageView() {
    try {
        const params = new URLSearchParams(window.location.search);
        const rawSrc = params.get("src");
        const src = rawSrc !== null ? Number(rawSrc) : 0;

        const key = `pv_last_${src}`;
        const last = Number(localStorage.getItem(key)) || 0;
        const now = Date.now();
        const COOLDOWN_MS = 30 * 1000;

        if (now - last < COOLDOWN_MS) return;

        localStorage.setItem(key, now);

        const url = `${API_BASE_URL}/api/metrics/page-view?src=${src}`;

        if (navigator.sendBeacon) {
            navigator.sendBeacon(url);
        } else {
            fetch(url, { method: "POST", keepalive: true }).catch(() => {});
        }
    } catch (_) {}
})();
