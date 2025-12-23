const presets = document.querySelectorAll('.preset');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const checkbox = document.getElementById('agree');
const donateButton = document.getElementById('donateBtn');

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
donateButton.addEventListener('click', () => {
    alert(
        `Donate ${amountInput.value} ${currencySelect.value}\n\nBackend (Stripe) is next step.`
    );
});


//const currencySelect = document.getElementById('currency');
//const presets = document.querySelectorAll('.preset');


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
