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
    task.innerHTML = `Создайте функцию conc, которая должна соединять два 
    параметра a и b и возвращать соединяющую строку с помощью оператора 
    function Declaration (FDS). Вызов этой функции должен происходить 
    перед ее объявлением.<br> Тестовые данные: a =1, b =1, результат = 11.`;
    const label1 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1")
    label1.innerHTML = "a: ";
    const label2 = document.createElement("label");
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2")
    label2.innerHTML = "b: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
   form.appendChild(label1);
   label1.appendChild(input1);
   form.appendChild(label2);
   label2.appendChild(input2)
    form.appendChild(btn);
    btn.addEventListener("click", runTask1);
}

function runTask1 (e) {
    e.preventDefault();
    clearResult();
    let num1 = jsConsole.read("#input1");
    let num2 = jsConsole.read("#input2");
    conc(num1, num2);

    function conc (a, b) {
       return  jsConsole.write(a+b);
    }

}


//Task2
document.getElementById("task2").addEventListener("click", task2);

function task2(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Создайте функцию comp, которая должна сравнить два параметра 
    a и b и возвратить 1, если a равно b и -1, если a не равно b, 
    используя Function Definition Expression.<br> Тестовые данные: а = abc, b = abc, 
    результат =1, а = abC, b = abc, результат= -1.`;
    const label1 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1")
    label1.innerHTML = "a: ";
    const label2 = document.createElement("label");
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2")
    label2.innerHTML = "b: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(input1);
    form.appendChild(label2);
    label2.appendChild(input2)
    form.appendChild(btn);
    btn.addEventListener("click", runTask2);
}

function runTask2 (e) {
    e.preventDefault();
    clearResult();
    let num1 = jsConsole.read("#input1");
    let num2 = jsConsole.read("#input2");

     let comp = function (a, b) {
         return a === b ? 1 : -1;
    }

    jsConsole.write(comp(num1, num2));
}

// // //Task3
document.getElementById("task3").addEventListener("click", task3);

function task3(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Создайте анонимную функцию, которая должна вывести сообщение
     «message in console» в консоли.`;
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.margin = "0px;"
    form.appendChild(btn);
    btn.addEventListener("click",  e => {
        e.preventDefault();
        jsConsole.write("«message in console»")});
}


//Task4
document.getElementById("task4").addEventListener("click", task4);

function task4(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. <br>
Например:<br>
console.log(fib(3)); //2<br>
console.log(fib(7)); //13<br>
console.log(fib(77)); //5527939700884757`;
    const label = document.createElement("label");
    label.innerHTML = "Number: ";
    const input = document.createElement("input");
    input.style.width = "115px";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(input);
    form.appendChild(btn);
    btn.addEventListener("click", runTask4);
}

function runTask4(e) {
    e.preventDefault();
    clearResult();
    let number = Number(jsConsole.read("input"));

    let fib = function numberN(n) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    jsConsole.writeLine(fib(number));
}

//Task5
document.getElementById("task5").addEventListener("click", task5);

function task5(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите функцию checkSpam которая проверяет строку на содержание слов: 
    spam, sex.<br>
    checkSpam(\'get new Sex videos\'); // true<br>
    checkSpam(\'[SPAM] How to earn fast money?\'); // true<br>
    checkSpam(\'New PSD template\'); // false<br>`;
    const label = document.createElement("label");
    label.innerHTML = "Text: "
    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "15");
    textarea.setAttribute("rows", "8");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    form.style.width= "245px";
    btn.addEventListener("click", runTask5);

    function runTask5(e) {
        e.preventDefault();
        clearResult();
        let text = jsConsole.read("textarea").toLowerCase();
        let word1 = "spam";
        let word2 = "sex";

        function checkSpam (t) {
            return t.includes(word1) || t.includes(word2);
        }

        jsConsole.writeLine(checkSpam(text));
    }
}
//Task6
document.getElementById("task6").addEventListener("click", task6);

function task6(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите функцию, которая принимает на вход строку и 
    возвращает ее неизменной, если ее длина не превышает 20 символов. 
    Если длина больше 20, то обрезает строку и добавляет в конец строки '...'`;
    const label = document.createElement("label");
    label.innerHTML = "Text: "
    const input = document.createElement("input");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(input);
    form.appendChild(btn);
    form.style.width = "245px";
    btn.addEventListener("click", runTask6);

    function runTask6 (e) {
        e.preventDefault();
        clearResult();
        let str = jsConsole.read("input").split('');

        function ellipsis (s) {
            let newS;
            if (s.length > 20) {
                s[20] = "...";
                newS = s.slice(0, 21).join("");
            } else newS = s.join("");
            return newS;
        }

        jsConsole.write(ellipsis(str))
    }
}
