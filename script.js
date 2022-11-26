let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    while((isNaN(money)) || (money == null) || (money == '')) {
        money = +prompt('Ваш бюджет на месяц?(в виде числа!!!)');
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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert(`Eжeдневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel() {
        if (appData.moneyPerDay <= 1000) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 4000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 4000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка какая-то');
        }
    },
    checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert(`Доход в месяц с Вашего депозита: ${appData.monthIncome}`);    
        }
    },
    chooseOptExpenses() {
        for (let i = 0; i < 2; i++) {
            let question = prompt('Введите необязательную статью расходов в этом месяце');
            let questionCost = prompt('Во сколько обойдется?');
            if((question != null) && (questionCost != null) && (question != '') && (questionCost != '')) {
                appData.optionalExpenses[question] = questionCost;
            } else {                            
                i--;
            }
        }
    },
    chooseIncome() {
        let items = prompt('Что может принесет дополнительный доход? (перечислите через запятую)','');
        while((!isNaN(+items)) || (items == null) || (items == '')) {
            items = prompt('Что может принесет дополнительный доход? (перечислите через запятую)','');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
        appData.income.forEach((el,ind) => alert(`Варианты заработка: ${ind+1} ${el}`));
    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

console.log(appData);


