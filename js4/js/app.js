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
    task.innerHTML = 'Написать JavaScript функцию, ' +
        'которая переворачивает строку и возвращает ее. Пример:" "sample" - "elpmas".';
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "String: ";
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
    let string = jsConsole.read("input");

    function reverse (str) {
        return  str.split("").reverse().join('');
    }

    jsConsole.write(reverse(string));
}


//Task2
document.getElementById("task2").addEventListener("click", task2);

function task2(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите JavaScript функцию, чтобы проверить, правильно 
    ли помещены скобки в заданном выражении. <br>
    * Пример правильного выражения: "((a + b) / 5-d)". <br>
    * Пример неправильного выражения:") (a + b))".`;
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Expression: ";
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
    let expression = jsConsole.read("input").split("");

    function brackets (exp) {
        let openBracket = [];
        let closeBracket = [];
        let noContent = "";
        let answer = "";
        for ( let i = 0; i < exp.length ; i++) {
            if (exp[i] == "(" && exp[i+1] == ")") {
                noContent = "true";
            }
            if (exp[i] == "(") {
                openBracket.push(exp[i])
            }
            if (exp[i] == ")") {
                closeBracket.push(exp[i])
                if (openBracket.length == 0){
                    answer = "Invalid Expression";
                }
            }
        }
        if (!noContent && openBracket.length === closeBracket.length) {
            answer = "Valid Expression";
        } else {
            answer = "Invalid Expression";
        }
        return answer;
    }

    jsConsole.write(brackets(expression));
}

// //Task3
document.getElementById("task3").addEventListener("click", task3);

function task3(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Написать JavaScript функцию, которая считает, сколько раз подстрока содержится в заданном ' +
        'тексте (выполнить поиск без учета регистра).<br> ' +
        '    **Пример**: целевая подстрока **"in"**. Текст таков: ' +
        'We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have ' +
        'anyth<b>in</b>g else. **In**side the sub-mar<b>in</b>e is very tight. ' +
        'So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** ' +
        '5 days.';
    const label1 = document.createElement("label");
    label1.innerHTML = "Text: "
    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "15");
    textarea.setAttribute("rows", "8");
    const label2 = document.createElement("label");
    label2.innerHTML = "Search: ";
    const input = document.createElement("input");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(textarea);
    form.appendChild(label2);
    label2.appendChild(input);
    form.appendChild(btn);
    btn.addEventListener("click", runTask3);
}

function runTask3 (e) {
    e.preventDefault();
    clearResult();
    let text = jsConsole.read("textarea").toLowerCase().split("");
    let substring = jsConsole.read("input").toLowerCase();

    function countSubstring (t, s) {
        let count = 0;
        for (let i = 0; i < t.length - 1; i++) {
            for ( let j = 0; j < s.length - 1; j++)
                if (s.length > 1) {
                    if (t[i] == s[j] && t[i+1] == s[j + 1])  count++;
                }
            if (s.length == 1 && t[i] == s) count++;
        }
        return count;
    }

    let result = countSubstring(text, substring);
    jsConsole.writeLine(`The substring "${substring}" is contained ${result} times in the text.`)
}

// //Task4
document.getElementById("task4").addEventListener("click", task4);

function task4(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Дан текст. Напишите функцию, которая изменяет текст во 
всех областях: 
    <ul>
        <li>text в верхний регистр</li>
        <li>text в нижний регистр</li>
        <li>text to mix casing (случайный)</li>
    </ul>
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`;
    const label = document.createElement("label");
    label.innerHTML = "Text: ";
    const textarea = document.createElement("textarea");
    textarea.style.width = "250px";
    textarea.value = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine" +
        "</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask4);
}

function runTask4(e) {
    e.preventDefault();
    clearResult();
    let text = jsConsole.read("textarea");
    function upCaseLowerCase (t) {
        let newText = t.replace(/<upcase>([\s\S]*?)<\/upcase>/g,
            function (match) {
                if (match.includes("lowcase")) {
                    let startU = match.indexOf("<upcase>");
                    let endU = match.indexOf("</upcase>");
                    let start = match.indexOf("<lowcase>");
                    let end = match.indexOf("</lowcase>");
                    let low = match.slice(start+9, end).toLowerCase();
                    match = match.slice(startU+8,start).toUpperCase() + low + match.slice(end+10,endU).toUpperCase();
                } else match = match.toUpperCase();
                return  match;
            }).replace(/<mixcase>([\s\S]*?)<\/mixcase>/g,
            function (match) {
                let matchN = [...match].map(char => Math.floor(Math.random() * 2) ? char.toLowerCase() : char.toUpperCase()).join('')
                if (match.includes("lowcase")) {
                    let startM = match.indexOf("<mixcase>");
                    let endM = match.indexOf("</mixcase>");
                    let start = match.indexOf("<lowcase>");
                    let end = match.indexOf("</lowcase>");
                    let low = match.slice(start+9, end).toLowerCase();
                    match = matchN.slice(startM+9, start) + low + matchN.slice(end+10,endM);
                } else if (match.includes("UPCASE")) {
                    let str = matchN.toLowerCase()
                    let startM = str.indexOf("<mixcase>");
                    let endM = str.indexOf("</mixcase>");
                    let start = str.indexOf("<upcase>");
                    let end = str.indexOf("</upcase>");
                    let low = str.slice(start+8, end).toUpperCase();
                    match = matchN.slice(startM+9, start) + low + matchN.slice(end+9,endM);
                } else match = matchN;
                return match;
            })
        return newText;
    }
    let result = upCaseLowerCase(text)
    jsConsole.writeLine(result);
}

//Task5
document.getElementById("task5").addEventListener("click", task5);

function task5(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = 'Написать функцию, которая заменяет пробелы в тексте на "nbsp"';
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
    btn.addEventListener("click", runTask5);

    function runTask5(e) {
        e.preventDefault();
        clearResult();
        let text = jsConsole.read("textarea").split("");

        function replace (t) {
            return    t.forEach(function (el, i) {
                if (el === " ") {
                    t[i] = "&nbsp;";
                }
            })
        }
        replace(text);
        jsConsole.writeLine(text.join(''))
    }
}

//Task6
document.getElementById("task6").addEventListener("click", task6);

function task6(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите функцию, которая извлекает содержимое html-страницы 
    в виде текста. Функция должна возвращать все, что находится в теге, без тегов`;
    const label = document.createElement("label");
    label.innerHTML = "HTML: "
    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "15");
    textarea.setAttribute("rows", "8");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask6);

    function runTask6(e) {
        e.preventDefault();
        clearResult();
        const html = jsConsole.read("textarea");
        function extract (t) {
            return t.replace(/<(\/?[^>]+)>/g, '');
        }
        jsConsole.writeLine(extract(html))
    }
}

//Task7
document.getElementById("task7").addEventListener("click", task7);

function task7(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Написать скрипт, который разбирает URL-адрес,
     вводимый в формате: \`[protocol]://[server]/[resource]\` 
     и извлекает из него элементы \`[протокол]\`, \`[сервер]\` и \`[ресурс]. 
     Возврат элементов в объекте JSON.`;
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "URL: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask7);

    function runTask7 (e) {
        e.preventDefault();
        clearResult();

        function parseURL () {
            let originUrl = jsConsole.read("input");
            let url = new URL(originUrl);
            let newUrl = JSON.parse(JSON.stringify({protocol: url.protocol, server: url.host, resourse: url.pathname}))
            jsConsole.writeLine(`protocol: ${newUrl.protocol.split(':').join('')}`);
            jsConsole.writeLine(`server: ${newUrl.server}`);
            jsConsole.writeLine(`resource: ${newUrl.resourse}`);
            return newUrl;
        }
        parseURL();
    }
}

//Task8
document.getElementById("task8").addEventListener("click", task8);

function task8(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите JavaScript функцию, заменяющую в HTML-документе, 
    представленном в виде строки, все теги <a href="...">...< / a>\` 
    соответствующими тегами \`[URL=...]...[/URL]".`;
    const label = document.createElement("label");
    label.innerHTML = "HTML: "
    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "15");
    textarea.setAttribute("rows", "8");
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask8);

    function runTask8(e) {
        e.preventDefault();
        clearResult();
        const html = jsConsole.read("textarea");
        function replace (t) {
            return t.replace(/<\/a>/g, '[/URL]')
                .replace(/<a[^>]*>(.*?)/g,
                    function (match) {
                        return match.split('"').join('')
                            .replace(/<a href/g, "[URL")
                            .replace(/[>]/g, "]")
                    });
        }
        jsConsole.writeLine(replace(html))
    }
}


//Task9
document.getElementById("task9").addEventListener("click", task9);

function task9(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Напишите функцию для извлечения всех адресов электронной почты из данного текста. 
    Все подстроки, соответствующие  \'<identifier>@<host>...<domain>\' должны быть распознаны 
    как электронная почта. Возвращайте e-mail в виде массива строк.`;
    const label = document.createElement("label");
    label.innerHTML = "Text: "
    const textarea = document.createElement("textarea");
    textarea.style.width = "250px";
    textarea.style.height = "150px";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask10);

    function runTask10(e) {
        e.preventDefault();
        clearResult();
        let text = jsConsole.read("textarea");

        function extractEmail (t) {
            return t.match(/\S+@\S+\.\S+/g);
        }
        let array = extractEmail(text);
        array.forEach(el => jsConsole.writeLine(el));
    }
}

//Task10
document.getElementById("task10").addEventListener("click", task10);

function task10(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Написать программу, которая извлекает из заданного 
    текста все палиндромы, например, "ABBA", "lamal" "exe".`;
    const label = document.createElement("label");
    label.innerHTML = "HTML: "
    const textarea = document.createElement("textarea");
    textarea.style.width = "250px";
    textarea.style.height = "150px";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask10);

    function runTask10 (e) {
        e.preventDefault();
        clearResult();
        let text = jsConsole.read("textarea");

        function palindrome (s) {
            s = s.split(' ').map (el => el.replace(/[,";:'. ]/g, ""));
            s.forEach(el => {
                if (el.split("").reverse().join("") === el && el !== "") {
                    jsConsole.writeLine(el);
                }
            })
        }
        palindrome(text);
    }
}

//Task11
document.getElementById("task11").addEventListener("click", task11);

function task11(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `. Напишите функцию, которая форматирует строку с помощью заполнителей.`;
    const label = document.createElement("label");
    label.innerHTML = "Text: "
    const textarea = document.createElement("textarea");
    textarea.style.width = "250px";
    textarea.style.height = "100px";
    textarea.value = "The coordinates of the {0} are X: {1} and Y: {2}.";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label);
    label.appendChild(textarea);
    form.appendChild(btn);
    btn.addEventListener("click", runTask11);

    function runTask11(e) {
        e.preventDefault();
        clearResult();
        let text = jsConsole.read("textarea");

        function stringFormat (str, ...arg) {
            for (let i = 0; i < arg.length; i++) {
                str = str.replace(new RegExp(`\\{${i}\\}`), arg[i])
            }
            return str;
        }
        jsConsole.write(stringFormat(text, "rectangle", 25, 36))
    }
}
 //Task12
document.getElementById("task12").addEventListener("click", task12);

function task12(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    task.innerHTML = `Написать функцию, которая создает HTML UL, используя шаблон для каждого 
    HTML LI. Источник списка должен быть массивом элементов. Замените все заполнители,
     помечен-ные\` - {...}- ' значением соответствующего свойства объекта.`;
    const btn = document.createElement("button");
    btn.style.margin = "0px";
    btn.innerHTML = "Execute";

    form.appendChild(btn);
    btn.addEventListener("click", runTask12);

    function runTask12(e) {
        e.preventDefault();
        clearResult();

        let people = [
            {name: "Шапокляк", age: 55},
            {name: "Чебурашка", age: 17},
            {name: "Крыска-Лариска", age: 18},
            {name: "Крокодильчик", age: 26},
            {name: "Турист-завтрак крокодильчика", age: 32},
        ]
        const p = document.querySelector("p");
        const div = document.createElement("div");
        const strong = document.createElement("strong");
        const span = document.createElement("span");

        strong.innerHTML = '-{name}-';
        span.innerHTML = `-{age}-`;

        div.appendChild(strong);
        div.appendChild(span);
        p.appendChild(div);

        div.setAttribute('data-type', 'template');
        div.setAttribute('id', 'list-item');

        let divPeople = document.getElementById("list-item");
        let template = divPeople.innerHTML;
        let peopleList = generateHtmlList(people, template);
        divPeople.innerHTML = peopleList;

        function generateHtmlList(p, t) {
            let list = document.createElement("ul");
            for (let i = 0; i < p.length; i++) {
                let listItem = document.createElement("li");
                listItem.innerHTML = t.replace(/{name}/, people[i].name)
                    .replace(/{age}/, people[i].age);
                list.appendChild(listItem);
            }
            while (divPeople.firstChild) {
                divPeople.removeChild(divPeople.firstChild);
            }
            return list.innerHTML;
        }
    }
}
