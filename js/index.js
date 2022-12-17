
const submitButton = document.querySelector('#submit');
const errorMessage = document.getElementsByClassName("inputError");
const allInput = document.getElementsByClassName("required");
const form = document.getElementById("myForm");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const numRegex = /[0-9]/;
const nameRegex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;



form.addEventListener("submit", function(e) {
    
    if (nameValidate() && surnameValidate() && emailValidate() && numValidate() && messageValidate()) {
        form.submit();
    } else {
        e.preventDefault();
        nameValidate();
        surnameValidate();
        emailValidate();
        numValidate();
        messageValidate();
    }

})



function nameValidate() {

    nome = allInput[0].value.split(' ').join('');
    nameBoolean = nome.match(nameRegex);
    
    if (nameBoolean) {
        if (nome.length < 3) {
            errorMessage[0].innerText = "Digite no mínimo 3 letras";
            allInput[0].style.borderColor = "#FF0000";
            return false;
        } else {
            errorMessage[0].innerText = "";
            allInput[0].style.borderColor = "#00FF00";
            return true;
        }
    } else if (nome == "") {
        errorMessage[0].innerText = "Preencha este campo";
        allInput[0].style.borderColor = "#FF0000";
        return false;
    } else {
        errorMessage[0].innerText = "Digite somente letras";
        allInput[0].style.borderColor = "#FF0000";
        return false;
    }

}



function surnameValidate() {

    surname = allInput[1].value.split(' ').join('');
    surnameBoolean = surname.match(nameRegex);

    if (surnameBoolean) {
        if (surname.length < 3) {
            errorMessage[1].innerText = "Digite no mínimo 3 letras"
            allInput[1].style.borderColor = "#FF0000";
            return false;
        } else {
            errorMessage[1].innerText = "";
            allInput[1].style.borderColor = "#00FF00";
            return true;
        }
    } else if (surname == "") {
        errorMessage[1].innerText = "Preencha este campo";
        allInput[1].style.borderColor = "#FF0000";
        return false;;
    } else {
        errorMessage[1].innerText = "Digite somente letras";
        allInput[1].style.borderColor = "#FF0000";
        return false;
    }

}



function emailValidate() {

    email = allInput[2].value;

    if (emailRegex.test(email)) {
        errorMessage[2].innerText = "";
        allInput[2].style.borderColor = "#00FF00";
        return true;
    } else if (email == "") {
        errorMessage[2].innerText = "Preencha este campo";
        allInput[2].style.borderColor = "#FF0000";
        return false;
    } else {
        errorMessage[2].innerText = "Digite o email corretamente";
        allInput[2].style.borderColor = "#FF0000";
        return false;
    }

}



function numValidate() {

    num = allInput[3].value.split(' ').join('');
    numBoolean = numRegex.test(num);

    if (numBoolean) {
        if (num.length == 11) {
            errorMessage[3].innerText = "";
            allInput[3].style.borderColor = "#00FF00";
            return true;
        } else if (num.length < 11) {
            errorMessage[3].innerText = "Está faltando números";
            allInput[3].style.borderColor = "#FF0000";
            return false;
        } else {
            errorMessage[3].innerText = "Você digitou muitos números";
            allInput[3].style.borderColor = "#FF0000";
            return false;
        }
    } else if (num == "") {
        errorMessage[3].innerText = "Preencha este campo";
        allInput[3].style.borderColor = "#FF0000";
        return false;
    } else {
        errorMessage[3].innerHTML = "Digite somente números";
        allInput[3].style.borderColor = "#FF0000";
        return false;
    }

}



function messageValidate() {

    message = allInput[4].value;

    if (message == "") {
        errorMessage[4].innerText = "Preencha este campo";
        allInput[4].style.borderColor = "#FF0000";
        return false;
    } else {
        errorMessage[4].innerText = "";
        allInput[4].style.borderColor = "#00FF00";
        return true;
    }

}