const button5 = document.querySelector('#five');
const button10 = document.querySelector('#ten');
const button15 = document.querySelector('#fifteen');
const button25 = document.querySelector('#twentyfive');
const button50 = document.querySelector('#fifty');
const reset = document.querySelector('#reset');
const amount = document.querySelector('#amount');
const total = document.querySelector('#total');

const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input');







billInput.addEventListener('change', (e) => {
    let value = e.target.value;

    buttonClick(button5, value, 1, 0.05);
    buttonClick(button10, value, 1, 0.10);
    buttonClick(button15, value, 1, 0.15);
    buttonClick(button25, value, 1, 0.25);
    buttonClick(button50, value, 1, 0.50);

    peopleInput.addEventListener('change', (e) => {
        let persons = e.target.value;
        buttonClick(button5, value, persons, 0.05);
        buttonClick(button10, value, persons, 0.10);
        buttonClick(button15, value, persons, 0.15);
        buttonClick(button25, value, persons, 0.25);
        buttonClick(button50, value, persons, 0.50);

    });
});


const buttonClick = (button, value, persons, percent) => {
    button.onclick = function () {
        value = value * percent;
        console.log(value);
        total.textContent = `£${value.toFixed(2)}p`;
        amount.textContent = '£' + (value / persons).toFixed(2) + 'p';
        persons = 1;
        value = '';
        peopleInput.value = '';
        billInput.value = '';
    }
};