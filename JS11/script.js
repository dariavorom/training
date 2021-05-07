function randomNumber () {
    let numbers       = [],
        numbersLength = 4,
        max           = 10,
        number;
    while (numbers.length < numbersLength) {
        number = Math.floor(Math.random() * max);
        if (numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }
    if (numbers[0] === 0) {
        numbers[0] = Math.floor((Math.random() * 9) + 1)
    }
    return numbers;
}

const numbers = randomNumber();
console.log(`You must guess this number: ${numbers.join('')}`);


const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const btn = document.createElement('button');



label.innerHTML = 'Enter your guess:';
btn.innerHTML = 'Guess number';

document.body.append(form);
form.append(label);
label.append(input);
form.append(btn);

btn.addEventListener('click', play);
let count = 0;
function play (e) {
    e.preventDefault();
    const p = document.createElement('p');
    let val = document.querySelector('input').value;
    let arr = val.split('')
        .map(el => +el);
    let repeat = false;
    let sheeps = [];
    let ram = [];
    count++;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                repeat = true;
            }
        }
    }
    if (arr.length < 4 || arr.length > 4 || arr.length === 0 || arr[0] === 0 || repeat) {
        p.innerHTML = `Invalid entered number. Number must contain
                four different digits and can not start with 0.`;
        form.append(p);
    } else {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] == arr[j] && i == j) {
                    ram.push(numbers[i]);
                } else if (numbers[i] == arr[j]) {
                    sheeps.push(numbers[i]);
                }
            }
        }
        p.innerHTML = `You have: ${ram.length} ram(s) and ${sheeps.length} sheep(s)`;
        form.append(p);
    }
    if (ram.length === 4) {
        clearResult();
        const form = document.createElement('form');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const btn = document.createElement('button');
        const btnAgain = document.createElement('button');
        const p = document.createElement('p');
        p.innerHTML = 'Congratulations! You have guessed the number and win the game!'
        label.innerHTML = 'Please enter your username';
        input.setAttribute('placeholder', 'Enter username');
        input.setAttribute('id', 'username');
        input.setAttribute('autocomplete', 'off');
        btn.innerHTML = 'Submit username';
        btn.setAttribute('type', 'submit');
        btnAgain.innerHTML = 'Play again';

        document.body.append(form);
        document.body.append(btnAgain);
        form.append(p);
        form.append(label);
        label.append(input);
        form.append(btn);

        btn.addEventListener('click', submit);
        btnAgain.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.reload();
        })

        function submit (e) {
            e.preventDefault();
            const input = document.querySelector('input');

            localStorage.setItem(input.value, count);
            for (let i = 0; i < localStorage.length; i++) {
                const p = document.createElement('p');
                p.innerHTML = `<em>Игрок</em>: ${localStorage.key(i)}, <em>всего ходов</em>: ${localStorage.getItem(localStorage.key(i))}`
                form.append(p);
            }
            count = 0;
        }
    }
}


function clearResult () {
    input.value = '';
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
}


