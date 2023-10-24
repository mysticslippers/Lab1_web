const dataSet = [0, 0, 0];
const yRegExp = new RegExp("^([-+]?\\d+[.]?\\d{0,15})$");
document.getElementById('data-form-id').addEventListener('submit', function(event){
    event.preventDefault();
    if(validate(this)){
       handleRequest(dataSet[0], dataSet[1], dataSet[2]);
    }
});

function validate(form){
    const allRadioInputs = form.querySelectorAll('input[type="radio"]');
    const textInput = form.querySelector('input[type="text"]');
    const allCheckboxInputs = form.querySelectorAll('input[type="checkbox"]');

    let validX = isValidX(allRadioInputs);
    let validY = isValidY(textInput);
    let validR = isValidR(allCheckboxInputs);
    return validX && validY && validR;
}

function isValidX(allRadioInputs){
    removeError(allRadioInputs.item(0));
    let valid = true;
    for(let input of allRadioInputs){
        if(input.checked){
            valid = true;
            dataSet[0] = input.value;
            break;
        }
        valid = false;
    }
    if(!valid){
        createError(allRadioInputs.item(0), "*Поле с X не должно быть пустым, выберите один из несольких!")
    }
    return valid;
}

function isValidY(textInput) {
    removeError(textInput);
    let valid;
    let yInput = textInput.value;
    if (yInput !== "") {
        if (yRegExp.test(yInput)) {
            let yNumberInput = Number(yInput);
            if (Number.isFinite(yNumberInput)) {
                valid = yNumberInput >= -5 && yNumberInput <= 5;
                if (!valid) {
                    createError(textInput, "*Поле с Y не должно выходить за пределы диапозона [-5..5]!");
                } else {
                    dataSet[1] = yNumberInput;
                }
            } else {
                valid = false;
                createError(textInput, "*Поле с Y должно быть представлено числом!");
            }
        } else {
            valid = false;
            createError(textInput, "*Поле с Y должно содержать 15 цифр после точки!");
        }
    }else {
        valid = false;
        createError(textInput, "*Поле с Y не должно быть пустым!");
    }
    return valid;
}

    function isValidR(allCheckboxInputs) {
        removeError(allCheckboxInputs.item(0));
        let valid = true;
        for (let input of allCheckboxInputs) {
            if (input.checked) {
                valid = true;
                dataSet[2] = input.value;
                break;
            }
            valid = false;
        }
        if (!valid) {
            createError(allCheckboxInputs.item(0), "*Поле с R не должно быть пустым, выберите один из несольких!");
        }
        return valid;
    }

    function createError(input, text) {
        const parent = input.parentNode.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error');
        parent.append(errorLabel);
    }

    function removeError(input) {
        const parent = input.parentNode.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }