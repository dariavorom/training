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
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    form.appendChild(btn);
    btn.addEventListener("click", runTask1);

    function runTask1(e) {
        e.preventDefault();
        clearResult();
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(i * 5)
        }
        arr.forEach((item, i) => jsConsole.writeLine(item))
    }
}

//Task2
document.getElementById("task2").addEventListener("click", task2);

function task2(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.setAttribute('id', 'input1');
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2")
    const btn = document.createElement("button");
    label1.innerHTML = "String1: ";
    label2.innerHTML = "String2: ";
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "90px";
    form.appendChild(label1);
    form.appendChild(label2);
    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(btn);
    btn.addEventListener("click", runTask2);

    function runTask2(e) {
        e.preventDefault();
        clearResult();
        let arr1 = jsConsole.read("#input1");
        let arr2 = jsConsole.read("#input2");
        console.log(arr1, arr2)
        if (arr1 < arr2) {
            jsConsole.writeLine("The first array is earlier.")
        } else if (arr1 > arr2) {
            jsConsole.writeLine("The second array is earlier.")
        } else {
            jsConsole.writeLine("Arrays are equals.")
        }
    }
}

//Task3
document.getElementById("task3").addEventListener("click", task3);

function task3(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Sequence [,]: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "145px";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask3);

    function runTask3(e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("input").split(",").map(el => +el);
        console.log(arr)
        let maxArray = [];
        let secondaryArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                secondaryArray.push(arr[i]);
            } else {
                secondaryArray = [arr[i]];
            }
            if (secondaryArray.length > maxArray.length) {
                maxArray = secondaryArray;
            }
        }
        jsConsole.writeLine("The input sequence is:");
        jsConsole.writeLine("[ " + arr.join(" ") + " ]");
        jsConsole.writeLine("The maximum sequence is:");
        jsConsole.writeLine("[ " + maxArray.join(" ") + " ]");
    }
}

//Task4
document.getElementById("task4").addEventListener("click", task4);

function task4(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Sequence [,]: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "145px";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask4);

    function runTask4(e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("input").split(",").map(el => +el);
        let maxArray = [];
        let secondaryArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                if (arr[i] + 1 == arr[i + 1]){
                    secondaryArray.push(arr[i]);
                } else {
                    if(arr[i] == arr[i-1] + 1){
                        secondaryArray.push(arr[i])
                    }
                }
            } else {
                secondaryArray = [arr[i]];
            }
            if (secondaryArray.length > maxArray.length) {
                maxArray = secondaryArray;
            }
        }
        jsConsole.writeLine("The input sequence is:");
        jsConsole.writeLine("[ " + arr.join(" ") + " ]");
        jsConsole.writeLine("The maximum sequence is:");
        jsConsole.writeLine("[ " + maxArray.join(" ") + " ]");
    }
}

//Task5
document.getElementById("task5").addEventListener("click", task5);

function task5(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Sequence [,]: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "145px";
    form.appendChild(label);
    form.appendChild(btn)
    label.appendChild(input)
    btn.addEventListener("click", runTask5);

    function runTask5(e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("input").split(",").map(el => +el);
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            let cur = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = cur;
        }
        arr.forEach((item, i) => jsConsole.writeLine(i + ": " + item))


    }
}

//Task6
document.getElementById("task6").addEventListener("click", task6);

function task6(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerHTML = "Sequence [,]: ";
    const btn = document.createElement("button");
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "145px";
    form.appendChild(label);
    form.appendChild(btn);
    label.appendChild(input);
    btn.addEventListener("click", runTask6);

    function runTask6(e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("input").split(",").map(el => +el);
        let num = 0;
        let max = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++){
                if(arr[i] == arr[j]){
                    count++;
                }
            }
            if (count > max){
                max = count + 1;
                num = arr[i];
            }
            count = 0;
        }
        jsConsole.write(num + ' (' + (max) + ' times)');
    }


}
//Task7
document.getElementById("task7").addEventListener("click", task7);

function task7(e) {
    e.preventDefault();
    clearForm();
    clearResult();
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.setAttribute('id', 'input1');
    const input2 = document.createElement("input");
    input2.setAttribute("id", "input2")
    const btn = document.createElement("button");
    label1.innerHTML = "Sequence [,]: ";
    label2.innerHTML = "Searched Value: ";
    btn.innerHTML = "Execute";
    btn.style.marginLeft = "90px";
    form.appendChild(label1);
    form.appendChild(label2);
    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(btn);
    btn.addEventListener("click", runTask7);

    function runTask7(e) {
        e.preventDefault();
        clearResult();
        let arr = jsConsole.read("#input1").split(",").map(el => +el)
            .sort((a, b) => a - b);
        let searchNum = jsConsole.readInteger("#input2")
        jsConsole.writeLine("Sorted array " + "<br>" + arr.join(" "));
        console.log(arr)
        console.log(typeof searchNum)
        if (!arr.includes(searchNum)) jsConsole.writeLine(" Searched value not found");
        let start = -1;
        let end = arr.length;
        while ( end - start > 1) {
            let middle = Math.floor((start + end) / 2);
            if ( searchNum < arr[middle]) end = middle;
                else start = middle;
            if ( arr[middle] == searchNum) jsConsole.writeLine
            ("The index of " + searchNum + " is " + arr.indexOf(searchNum));
        }
    }
}
