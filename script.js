const checkbox = document.getElementById('agree');
const donateButton = document.getElementById('donateBtn');

checkbox.addEventListener('change', () => {
    donateButton.disabled = !checkbox.checked;
});

donateButton.addEventListener('click', () => {
    alert("Backend not connected yet. Next step.");
});