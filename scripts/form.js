const textarea = document.getElementById("textarea");
textarea.placeholder = "Laissez-moi un mot!\n(limite de 500 caractères)";

document.getElementById("form").addEventListener("submit", (e) => {
    const name = document.getElementById("name");
    const firstName = document.getElementById("firstName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const nameError = document.getElementById("name-error");
    const firstNameError = document.getElementById("firstName-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");

    const isNameValid = validateInput(name, nameError, "Saisissez votre nom");
    const isFirstNameValid = validateInput(firstName, firstNameError, "Saisissez votre prénom");
    const isEmailValid = validateEmail(email, emailError, "L'adresse e-mail saisie n'est pas valide");
    const isPhoneValid = validatePhone(phone, phoneError, "Mettez votre numéro à 10 chiffre");

    if (!isNameValid || !isFirstNameValid || !isEmailValid || !isPhoneValid) return e.preventDefault();

});

/**
 * 
 * @param {string} input récupération de l'input
 * @param {string} errorElement utilisation du span
 * @param {string} errorMessage message d'erreur a envoyer
 * @returns {boolean}
 */

function validateInput(input, errorElement, errorMessage) {
    const inputPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]+$/;

    if (!inputPattern == (input.value)) {
        errorElement.innerText = errorMessage;
        errorElement.classList.add('error');
        return false;
    } else {
        errorElement.innerText = "";
        errorElement.classList.remove('error');

        return true;
    }
}

function validateEmail(input, errorElement, errorMessage) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(input.value)) {
        errorElement.innerText = errorMessage;
        errorElement.classList.add('error');
        return false;
    } else {
        errorElement.innerText = "";
        errorElement.classList.remove('error');
        return true;
    }
}

function validatePhone(input, errorElement, errorMessage) {
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(input.value)) {
        errorElement.innerText = errorMessage;
        errorElement.classList.add('error');
        return false;
    } else {
        errorElement.innerText = "";
        errorElement.classList.remove('error');
        return true;
    }
}
