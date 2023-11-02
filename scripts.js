document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = form.querySelector('input[name="email"]');
        const userEmail = emailInput.value;

        if (userEmail.trim() === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${userEmail} has been added to our mailing list!`;
            emailInput.value = '';
        }
    });
});
