document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const withdrawCurrentAmount = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = withdrawCurrentAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const balanceCurrentAmount = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = balanceCurrentAmount;



    withdrawField.value = '';
})