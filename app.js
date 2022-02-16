function calculate() {

    //-----------------Input the value of amount-------------------
    const Food = document.getElementById('food-tk');
    const buyFood = parseInt(Food.value);
    const Rent = document.getElementById('rent-tk');
    const payRent = parseInt(Rent.value);
    const Clothes = document.getElementById('buy-cloths');
    const buyClothes = parseInt(Clothes.value);
    const Income = document.getElementById('income-tk');
    const totalIncome = parseInt(Income.value);
    //-------all input value check number or cherecter---------------
    if (!isNaN(buyFood) && !isNaN(buyClothes) && !isNaN(payRent) && !isNaN(totalIncome) && buyFood > -1 && payRent > -1 && buyClothes > -1 && totalIncome > -1) {
        //------------display total Expenses ampunt-----------------
        const totalExpenses = buyFood + payRent + buyClothes;
        const diplsyExpenses = document.getElementById
            ('total-expenses');
        diplsyExpenses.innerText = totalExpenses;
        // ----------display balance after expenses---------
        const balance = totalIncome - totalExpenses;
        if (balance < 0) {
            const displayBalance = Document.getElementById('debt-balance');


        } else {
            const displayBalance = document.getElementById('balance');
            displayBalance.innerText = balance;
        }


    } else {
        console.log('bal number dew tmi');
    }


    // console.log(buyFood);
    // console.log(payRent.value);
    // console.log(buyClothes.value);
    // console.log(Income.value);
}

function saveMoney() {

    const percentage = document.getElementById('percentage-rate');
    const savingDisplay = document.getElementById('Saving-display');
    const totalIncome = document.getElementById('income-tk').value;
    const percentageRate = parseInt(percentage.value);
    console.log(percentageRate);
    const saving = parseInt(totalIncome) * percentageRate / 100;
    savingDisplay.innerText = saving;
    console.log(saving);
}