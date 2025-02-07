document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission until validated

    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 3) {
        name.classList.add('is-invalid');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
        emailError.style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
        phoneError.style.display = 'none';
    }

    // Address validation
    const address = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    if (!address.value.trim()) {
        address.classList.add('is-invalid');
        addressError.style.display = 'block';
        isValid = false;
    } else {
        address.classList.remove('is-invalid');
        addressError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
        messageError.style.display = 'none';
    }

    if (isValid) {
        this.submit(); // Submit the form if valid
    }
});

// Real-time validation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim()) {
            this.classList.remove('is-invalid');
            this.nextElementSibling.style.display = 'none';
        }
    });
});
