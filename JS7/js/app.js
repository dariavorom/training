const form = document.getElementById("input");
const task = document.getElementById("task");
function clearForm() {
    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
}
function clearConsole (e) {
    e.preventDefault();
    jsConsole.clear("p")
}
//Task1
document.getElementById("task1").addEventListener("click", task1);

function task1(e) {
    e.preventDefault();
    clearForm();
    jsConsole.clear("p");
    task.innerHTML = `Напишите функции для работы с фигурами в стандартной плоскостной системе координат:
    <ul>
        <li>Точки представлены координатами \`P(X, Y)\`</li>
        <li>Линии представлены двумя точками, обозначающими их начало и конец: \`L(P1(X1, Y1)\`, \`P2(X2, Y2))\`</li>
        <li>Вычислите расстояние между двумя точками</li>
        <li>Проверьте, могут ли три сегмента линии сформировать треугольник</li>
    </ul>`;
    const btn1 = document.createElement("button");
    btn1.innerHTML = "Can create triangle";
    const btn2 = document.createElement("button");
    btn2.innerHTML = "Cannot create triangle";
    const btnClear = document.createElement("button");
    btnClear.innerHTML = "Clear console";
    form.appendChild(btn1);
    form.appendChild(btn2);
    form.appendChild(btnClear);
    btnClear.addEventListener("click", clearConsole);
    btn1.addEventListener("click", can);
    btn2.addEventListener("click", cannot);


    function createPoint (x, y) {
        return {
            x: x,
            y: y,
        }
    }

    function createLine (begin, end) {
        return {
            begin,
            end,
        };
    }

    function calcDistance (a,b) {
        return Math.sqrt(((b.x - a.x)**2) + ((b.y - a.y)**2))
    }

    function canBeTriangle (a,b,c) {
        if ( a +b > c && a + c > b && c + b > a ) {
            jsConsole.writeLine(`The lines CAN create triangle!<br>`)
        } else jsConsole.writeLine(`The lines CANNOT create triangle!<br>`)
    }

    function write (point) {
        jsConsole.write(`Line 1:<br>
        Line point A(${point[0].x},${point[0].y})<br>
        Line point A(${point[1].x},${point[1].y})<br>
        <br>
        Line 2:<br>
        Line point A(${point[2].x},${point[2].y})<br>
        Line point A(${point[3].x},${point[3].y})<br>
        <br>
        Line 3:<br>
        Line point A(${point[4].x},${point[4].y})<br>
        Line point A(${point[5].x},${point[5].y})<br>
        <br>`)

    }
    //Points can create triangle
    const point1 = createPoint(3,3);
    const point2 = createPoint(5,5);
    const point3 = createPoint(2,2);
    const point4 = createPoint(4,4);
    const point5 = createPoint(1,1);
    const point6 = createPoint(3,3);

    const pointsCan = [point1, point2, point3, point4, point5, point6];

    const line1 = createLine(point1, point2);
    const line2 = createLine(point3, point4);
    const line3 = createLine(point5, point6);

    const dis1 = calcDistance(point1, point2);
    const dis2 = calcDistance(point3, point4);
    const dis3 = calcDistance(point5, point6);

    function can (e) {
        e.preventDefault();
        canBeTriangle(dis1, dis2, dis3);
        write(pointsCan);
   }

    //Points cannot create triangle
    const point7 = createPoint(3,3);
    const point8 = createPoint(5,5);
    const point9 = createPoint(2,2);
    const point10 = createPoint(4,4);
    const point11 = createPoint(1,1);
    const point12 = createPoint(3,7);

    const pointsCannot = [point7, point8, point9, point10, point11, point12];

    const line4 = createLine(point7, point8);
    const line5 = createLine(point9, point10);
    const line6 = createLine(point11, point12);

    const dis4 = calcDistance(point7, point8);
    const dis5 = calcDistance(point9, point10);
    const dis6 = calcDistance(point11, point12);

    function cannot (e) {
        e.preventDefault();
        canBeTriangle(dis4,dis5,dis6);
        write(pointsCannot);
    }
}



// //Task2
document.getElementById("task2").addEventListener("click", task2);

function task2(e) {
    e.preventDefault();
    clearForm();
    jsConsole.clear("p");
    task.innerHTML = `Напишите функцию, которая удаляет все элементы с заданным значением.`;
    const label1 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.value = `1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"`;
    label1.innerHTML = "Array: ";
    const label2 = document.createElement("label");
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2");
    input2.value = 1;
    label2.innerHTML = "Remove: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(label1);
    label1.appendChild(input1);
    form.appendChild(label2);
    label2.appendChild(input2);
    form.appendChild(btn);
    btn.addEventListener("click", runTask2);
}

function runTask2 (e) {
    e.preventDefault();
    const array =[ 1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
    const num = 1;
    Array.prototype.remove = function (n, arr) {
        return arr.filter(el => el !== n);
    }
    jsConsole.writeLine(array.remove(num, array));
    console.log(array.remove(num, array));
}

 //Task3
document.getElementById("task3").addEventListener("click", task3);

function task3(e) {
    e.preventDefault();
    clearForm();
    jsConsole.clear("p");
    task.innerHTML = `Напишите функцию, которая делает глубокую копию объекта.
     Функция должна работать как для примитивных, так и для ссылочных типов.`;
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(btn);
    btn.addEventListener("click", runTask3);
    function runTask3 (e) {
        e.preventDefault();
        const object = {
            a: 1,
            b: 4,
            c: "Inessa",
            d: "Ksysha",
        };

        let deepCopy = {};
        function copyObject(obj) {
            deepCopy = JSON.parse(JSON.stringify(obj));
            for (let i in obj) {
                jsConsole.writeLine(obj[i])
            }
            return deepCopy;
        }
        copyObject(object);

        console.log(object)
        console.log(deepCopy);
        deepCopy.e = true;
        console.log(object)
        console.log(deepCopy);

    }
}


