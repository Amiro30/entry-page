const presets = document.querySelectorAll('.preset');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const checkbox = document.getElementById('agree');
const donateButton = document.getElementById('donateBtn');
const API_BASE_URL = "https://hubproject-production-a4ff.up.railway.app";

//const params = new URLSearchParams(window.location.search);
//const source = Number(params.get("src")) || 0;

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
    if (amountInput.value < 1) {
        amountInput.value = 1;
    }
});

// policy checkbox
checkbox.addEventListener('change', () => {
    donateButton.disabled = !checkbox.checked;
});

// placeholder for backend
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
            headers: {
                "Content-Type": "application/json"
            },
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

const currencySymbols = {
    GBP: '£',
    EUR: '€',
    USD: '$'
};


function updateCurrencySymbols() {
    const currency = currencySelect.value;
    const symbol = currencySymbols[currency];

    presets.forEach(btn => {
        const amount = btn.dataset.amount;

        // wide button (£50+)
        if (btn.classList.contains('wide')) {
            btn.innerHTML = `${symbol}50+<br><small>You are the best</small>`;
        } else {
            const label = btn.querySelector('small').innerText;
            btn.innerHTML = `${symbol}${amount}<br><small>${label}</small>`;
        }
    });
}


currencySelect.addEventListener('change', updateCurrencySymbols);

// call one time  during load
updateCurrencySymbols();

const messageInput = document.getElementById('message');
const charHint = document.getElementById('charHint');

messageInput.addEventListener('input', () => {
    if (messageInput.value.length >= 250) {
        charHint.hidden = false;
    } else {
        charHint.hidden = true;
    }
});
