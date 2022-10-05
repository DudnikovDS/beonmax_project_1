let money, time;
money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let questionOne = prompt('Введите обязательную статью расходов в этом месяце');
let questionOneCost = prompt('Во сколько обойдется?');

let questionTwo = prompt('Введите обязательную статью расходов в этом месяце');
let questionTwoCost = prompt('Во сколько обойдется?');

appData.expenses[questionOne] = questionOneCost;
appData.expenses[questionTwo] = questionTwoCost;

alert(appData.budget / 30);

console.log(appData.expenses);
