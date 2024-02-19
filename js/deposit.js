document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    const depositCurrentAmount = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = depositCurrentAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const balanceCurrentAmount = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = balanceCurrentAmount;



    depositField.value = '';
})