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