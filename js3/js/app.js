const form = document.getElementById("input");
const task = document.getElementById("task");
function clearForm() {
    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
}

function clearResult() {
    const consoleResult = document.querySelector("#console p")
    while (consoleResult.firstChild) {
        consoleResult.removeChild(consoleResult.firstChild);
    }
}

//Task1
document.getElementById("task1").addEventListener("click", task1);

function task1(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая возвращает последнюю цифру ' +
        'заданного целого числа в виде английского слова. ' +
        'Примеры: 512 - "two", 1024 - "four", 12309 - " nine"';
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Number: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask1);
}

function runTask1 (e) {
    e.preventDefault();
    clearResult();
    let num = jsConsole.read("input").split("").map(el=>+el).pop();
    switch (num) {
        case 1: {
            jsConsole.writeLine("one");
        } break;
        case 2: {
            jsConsole.writeLine("two");
        } break;
        case 3: {
            jsConsole.writeLine("three");
        } break;
        case 4: {
            jsConsole.writeLine("four");
        } break;
        case 5: {
            jsConsole.writeLine("five");
        } break;
        case 6: {
            jsConsole.writeLine("six");
        } break;
        case 7: {
            jsConsole.writeLine("seven");
        } break;
        case 8: {
            jsConsole.writeLine("eight");
        } break;
        case 9: {
            jsConsole.writeLine("nine");
        } break;
        case 0: {
            jsConsole.writeLine("zero");
        } break;
        default: {
            jsConsole.writeLine('error');
        }
    }
}


//Task2
document.getElementById("task2").addEventListener("click", task2);

function task2(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая переворачивает цифры ' +
        'заданного десятичного числа. Например: 256 - 652';
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Number: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask2);
}

function runTask2 (e) {
    e.preventDefault();
    clearResult();
    // let arr = jsConsole.read("input").split("").reverse().join("");

    // let arr = jsConsole.read("input").split("");
    // let reverseArr = [];
    // for ( let i = 0; i<arr.length; i++) {
    //     reverseArr.push(arr[(arr.length - 1) - i]);
    // }
    // jsConsole.writeLine(reverseArr.join(''));

    let arr = jsConsole.read("input").split("");
    let reverseArr = [];
    for ( let i = arr.length-1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    jsConsole.writeLine(reverseArr.join(''));
}

//Task3
document.getElementById("task3").addEventListener("click", task3);

function task3(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая находит все вхождения слова в текст:'+ '' +
        '<ul>\n' +
        '    <li>Поиск с учетом регистра или без учета регистра</li>\n' +
        '    <li>Используйте перегрузку функций</li>\n' +
        '</ul>';
    const label1 = document.createElement("label");
    const textarea = document.createElement("textarea");
    label1.innerHTML = "Text: ";
    const label2 = document.createElement("label");
    const input1 = document.createElement("input");
    label2.innerHTML = "Word: ";
    const label3 = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    label3.innerHTML = "Case sensitive ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(textarea);
    form.appendChild(label2);
    label2.appendChild(input1);
    form.appendChild(label3)
    label3.appendChild(checkbox)
    form.appendChild(btn);
    btn.addEventListener("click", runTask3);
}

function runTask3 (e) {
    e.preventDefault();
    clearResult();
    let text = jsConsole.read("textarea");
    let word = jsConsole.read("input");
    let check = document.querySelector("#checkbox");
    let arr = [];
    function search () {
        if(check.checked) {
            arr = text.toLowerCase().split(' ').filter(w => w == word.trim().toLowerCase());
        } else {
            arr = text.split(' ').filter(w => w == word.trim());
        }
    }
    search();
    jsConsole.writeLine('There are '+ arr.length + ' occurrences into word ' + '"' + word + '"');
}

//Task4
document.getElementById("task4").addEventListener("click", task4);

function task4(e) {
    e.preventDefault();
    clearForm();
    clearResult();

    task.innerHTML = 'Напишите функцию для подсчета количества тегов &lt;div&gt; на веб-странице';
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.margin = "0";
    form.appendChild(btn);
    btn.addEventListener("click", runTask4);
}

function runTask4(e) {
    e.preventDefault();
    clearResult();
    let divs = document.getElementsByTagName("div").length;
    jsConsole.writeLine(divs);
}

//Task5

document.getElementById("task5").addEventListener("click", task5);

function task5(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая подсчитывает, сколько раз ' +
        'встречается заданное число в заданном массиве. Напишите тестовую функцию, ' +
        'чтобы проверить правильность работы функции.';
    const label1 = document.createElement("label");
    label1.innerHTML = "Sequence [,]"
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.setAttribute("autocomplete", "off");
    const label2 = document.createElement("label");
    label2.innerHTML = "Search"
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2");
    input2.setAttribute("autocomplete", "off");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    const btnTest = document.createElement("button");
    btnTest.innerHTML = "Test";
    form.appendChild(label1);
    label1.appendChild(input1);
    form.appendChild(label2);
    label2.appendChild(input2);
    form.appendChild(btn);
    form.appendChild(btnTest);
    btn.addEventListener("click", runTask5);
    btnTest.addEventListener("click", runTask5Test);

    function countTimes (arr1,arr2,n) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === n) {
                arr2.push(arr1[i]);
            }
        }
        if (arr2.length === 0) {
            jsConsole.writeLine("no matches");
        } else {
            jsConsole.writeLine(arr2.length + " times");
        }
    }

    function runTask5 (e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("#input1").split(",").map(el=>+el);
        let num = jsConsole.readInteger("#input2");
        let arrNum = [];
        countTimes(arr, arrNum, num);
    }

    function runTask5Test (e) {
        e.preventDefault();
        clearResult();
        input1.value =  "1,6,5,1,6,5,1,4,8";
        let arr = input1.value.split(',').map(el=>+el);
        input2.value = "1";
        let num = parseInt(input2.value);
        let arrNum = [];
        countTimes(arr, arrNum, num);
    }
}

//Task6
document.getElementById("task6").addEventListener("click", task6);

function task6 (e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая проверяет, является ли элемент в ' +
        'заданной позиции в заданном массиве целых чисел большим, чем его два соседа ' +
        '(когда такие существуют).';
    const label1 = document.createElement("label");
    label1.innerHTML = "Sequence [,]"
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.setAttribute("autocomplete", "off");
    const label2 = document.createElement("label");
    label2.innerHTML = "Position";
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2");
    input2.setAttribute("autocomplete", "off");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(input1);
    form.appendChild(label2);
    label2.appendChild(input2);
    form.appendChild(btn);
    btn.addEventListener("click", runTask6);
}

function runTask6 (e) {
    e.preventDefault();
    clearResult();
    let arr = jsConsole.read("#input1").split(",").map(el=>+el);
    let pos = jsConsole.readInteger("#input2");

    function result() {
    let flag = false;
    for ( let i = 0; i < arr.length; i++) {
        if (arr[pos] > arr[i -1] && arr[i] > arr[i+1] && pos > 0) {
            flag = true;
            }
        }
    if (pos == 0 || pos == arr.length - 1) jsConsole.writeLine("Position cannot be first or last in the sequence!");
    if (pos < 0 || pos > arr.length - 1) jsConsole.writeLine(`Position cannot be under 0 or more then ${arr.length-1}!`);
    return flag;
    }
    let res = result();
    jsConsole.writeLine(res);
}

//Task7
document.getElementById("task7").addEventListener("click", task7);

function task7 (e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Напишите функцию, которая возвращает индекс первого элемента ' +
        'в массиве, который больше его соседей, или -1, если нет такого элемента. ' +
        'Используйте функцию из предыду-щего упражнения.';
    const label1 = document.createElement("label");
    label1.innerHTML = "Sequence [,]"
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.setAttribute("autocomplete", "off");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(input1);
    form.appendChild(btn);
    btn.addEventListener("click", runTask7);
}

function runTask7 (e) {
    e.preventDefault();
    clearResult();
    let arr = jsConsole.read("#input1").split(",").map(el=>+el);
    function result() {
        let index = -1;
        for ( let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i -1] && arr[i] > arr[i+1] && i > 0) {
                index = i;
            }
        }
        return index;
    }
    let res = result();
    if (res === -1) {
        jsConsole.writeLine(res);
    } else {
        jsConsole.writeLine("Element index: " + res);
    }
}
