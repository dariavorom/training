const form = document.getElementById("input");

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
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Number: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "95px";
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
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Number: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "95px";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask2);
}

function runTask2 (e) {
    e.preventDefault();
    clearResult();
    // let arr = jsConsole.read("input").split("").reverse().join("");
    let arr = jsConsole.read("input").split("");
    let reverseArr = [];
    for ( let i = 0; i<arr.length; i++) {
        reverseArr.push(arr[(arr.length - 1) - i]);
    }
    jsConsole.writeLine(reverseArr.join(''));
}


//Task4
document.getElementById("task4").addEventListener("click", task4);

function task4(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(btn);
    btn.addEventListener("click", runTask4);
}

function runTask4(e) {
    e.preventDefault();
    clearResult();
    let divs = document.getElementsByTagName("div").length;
    jsConsole.writeLine(divs);
}
