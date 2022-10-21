let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    while((isNaN(money)) || (money == null) || (money == '')) {
        money = +prompt('Ваш бюджет на месяц?');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let question = prompt('Введите обязательную статью расходов в этом месяце');
        while((question == null) || (question == '')) {
            question = prompt('Введите обязательную статью расходов в этом месяце');
        }
        
        let questionCost = +prompt('Во сколько обойдется?');
        while((isNaN(questionCost)) || (questionCost == null) || (questionCost == '')) {
            questionCost = +prompt('Во сколько обойдется?');
        }

        appData.expenses[question] = questionCost;
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert(`Eжeдневный бюджет: ${appData.moneyPerDay}`);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 1000) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 4000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 4000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка какая-то');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        alert(`Доход в месяц с Вашего )депозита: ${appData.monthIncome}`);    
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let question = prompt('Введите необязательную статью расходов в этом месяце');
        let questionCost = prompt('Во сколько обойдется?');
        if((question != null) && (questionCost != null) && (question != '') && (questionCost != '')) {
            appData.optionalExpenses[question] = questionCost;
        } else {                            
            i--;
        }
    }
}

chooseOptExpenses();

console.log(appData);



