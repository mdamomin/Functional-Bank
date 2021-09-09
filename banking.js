const deposit = () =>{
    balanceCalculation('deposit_input','deposit_warning','deposit_amount','balance_amount',1)
}

const withdraw = () =>{
    const withdrawInputField = document.getElementById('withdraw_input');
    const withdrawAmount = parseFloat(withdrawInputField.value);
    const balanceField = document.getElementById('balance_amount');
    const balanceAmount = parseFloat(balanceField.innerText);
    if(withdrawAmount > balanceAmount){
        document.getElementById('withdraw_warning').innerText = 'Withdraw amount should not be greater than Balance amount!'
    }
    else{
        balanceCalculation('withdraw_input','withdraw_warning','withdraw_amount','balance_amount',-1)
    } 
}

const balanceCalculation = (input,warning,amount,balance_amount,sign) => {
    const inputField = document.getElementById(input);
    const inputValue = parseFloat(inputField.value);

    if(inputValue <= 0){
        document.getElementById(warning).innerText = 'Please enter positive value!'
    }
    else{
        const amountField = document.getElementById(amount);
        const depositAmount = parseFloat(amountField.innerText);
        amountField.innerText = depositAmount + inputValue;

        const balanceAmountField = document.getElementById(balance_amount);
        const balanceAmount = parseFloat(balanceAmountField.innerText);
        balanceAmountField.innerText = balanceAmount + sign*inputValue;
    } 
    inputField.value = '';
}