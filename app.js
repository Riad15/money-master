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
            // console.log("tumar taka rin ache");
            const displayBalance = document.getElementById('reaming-msg');
            const debt = document.getElementById('debt-balance');
            debt.innerText = balance;
            // console.log(displayBalance.innerText);
            displayBalance.style.display = 'block'
            setTimeout(myFunction, 3000);

            function myFunction() {
                displayBalance.style.display = 'none';
            }




        } else {
            const displayBalance = document.getElementById('balance');
            displayBalance.innerText = balance;
        }


    } else {
        const errorMSG = document.getElementById('error-text');
        errorMSG.style.display = 'block';
        setTimeout(myFunction, 3000);

        function myFunction() {
            errorMSG.style.display = 'none';
        }
    }


    // console.log(buyFood);
    // console.log(payRent.value);
    // console.log(buyClothes.value);
    // console.log(Income.value);
}


function saveMoney() {
    const balance = document.getElementById('balance').innerText;
    const balanceCheck = parseInt(balance);
    if (balanceCheck <= 0) {
        const savingDisplay = document.getElementById('Saving-display');
        console.log(savingDisplay);
        savingDisplay.style.display = 'block';
    } else {
        const percentage = document.getElementById('percentage-rate');
        const savingDisplay = document.getElementById('Saving-display');

        const totalIncome = document.getElementById('income-tk').value;
        const percentageRate = parseInt(percentage.value);
        const saving = parseInt(totalIncome) * percentageRate / 100;
        savingDisplay.innerText = saving;

        const RemainingBalance = document.getElementById('Remaining-Balance');

        const updateRemainingBalance = parseInt(balance) - saving;
        RemainingBalance.innerText = updateRemainingBalance;
    }





}