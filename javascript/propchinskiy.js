var form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    var isValid = validateForm();

    if (isValid) {
        form.submit()
    }
    else {
        alert('Invalid form');
    }
}

function validateForm() {
    var isValid,
        isValidUsername,
        username = document.getElementById('username').value,
        isValidPassword,
        password = document.getElementById('password').value,
        isEqualPassword,
        repeat = document.getElementById('repeat').value,
        isValidEmail,
        email = document.getElementById('email').value,
        isValidPhone,
        phone = document.getElementById('phone').value,
        licensee = document.getElementById('licensee').value;

    isValidUsername = Valisator.validateUsername(username.value);
    if (!isValidUsername) {
        username.classList.add('error')
    }else {
        username.classList.remove('error')
    }

    isValidPassword = Valisator.validatePassword(password.value);
    if (isValidUsername) {

    }else {

    }

    isEqualPassword = password.value === repeatPassword.value;
    if (isValidUsername) {

    }else {

    }

    isValidEmail = Valisator.validateEmail(email.value);
    if (isValidUsername) {

    }else {

    }

    isValidPhone = Valisator.validatePhone(phone.value);
    if (isValidUsername) {

    }else {

    }

    isValid = isValidUsername
        && isValidPassword
        && isEqualPassword
        && isValidEmail
        && isValidPhone
        && licensee.checked;

    return isValid;
}

var Validator = {
    validateUsername: function (value) {
        return value.trim().length >= 5 && value.length <= 10;
    },
    validatePassword: function (value) {
        var validLength,
            numberOfDigits,
            numberOfCapitalizedLetters;

        validLength = value.trim().length >= 6;
        for (var i = 0; i < value.length; i++) {
            if (isNaN(parseInt(value[i]))) {
                numberOfDigits = false;
                continue;
            } else {
                numberOfDigits = true;
                break;
            }
        }

        for (var j = 0; j < value.length; j++) {
            if (value[j] === value[j].toUpperCase()) {
                numberOfCapitalizedLetters = true;
                break;
            } else {
                numberOfCapitalizedLetters = false;
            }
        }
        return validLength && numberOfDigits && numberOfCapitalizedLetters;
    },
    validateEmail: function (value) {
        return value.includes("@") && value.includes(".");
    },
    validatePhone: function (value) {
        return true;
    },
    validateLicensee: function (value) {

    },
    validateSubmit: function (value) {

    }
};