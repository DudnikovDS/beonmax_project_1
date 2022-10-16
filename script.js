let money, time;
money = +prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let question = prompt('Введите обязательную статью расходов в этом месяце');
    let questionCost = prompt('Во сколько обойдется?');
    if((question != null) && (questionCost != null) && (question != '') && (questionCost != '')) {
        console.log('ok');
        appData.expenses[question] = questionCost;
    } else {                            
        console.log ("bad result");
        i--;
    }
    
}

let j = 0;
do {
    alert('dddd');
    j++;
}
while (j < 2);

appData.moneyPerDay = appData.budget / 30;

alert(`Eжeдневный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay <= 1000) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 4000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 4000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка какая-то');
}

console.log(appData);

