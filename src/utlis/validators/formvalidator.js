function checkValidityHandler(validationRule, value) {
    let regexTextOnly = /^[a-zA-Z ]{2,50}$/;
    let regexNumberOnly = /^[0-9]{1,10}$/;
    let regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let isValid = true
    let errorMessage = ''
    if (validationRule.required) {
        isValid = value.trim(' ') !== '' && isValid
        errorMessage = !isValid ? 'Please enter a valid value' : ''

    }
    if (validationRule.textOnly) {
        isValid = regexTextOnly.test(value) && isValid
        errorMessage = !isValid ? 'Should contain only letters and space' : ''
    }
    if (validationRule.numberOnly) {
        isValid = regexNumberOnly.test(value) && isValid
        errorMessage = !isValid ? 'Enter a Valid Number' : ''
    }
    if (validationRule.matchEmail) {
        isValid = regexEmail.test(value)
        errorMessage = !isValid ? 'Enter a Valid Email' : ''
    }

    if (validationRule.minLength) {
        isValid = value.length >= validationRule.minLength && isValid
        errorMessage = !isValid ? 'Minimum 8 characters required' : ''

    }

    return {
        isValid,
        errorMessage,
    }
}

export default checkValidityHandler