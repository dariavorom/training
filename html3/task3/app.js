let pSize = document.querySelector('#pageSize');

let table = document.querySelector("#parent");
let arr = [
    [1, "Chai", "$18", "10 boxes * 20bags", 39, `<input type="checkbox">`],
    [2, "Chang", "$19", "24 -12 oz bottles", 17, `<input type="checkbox">`],
    [3, "Anissed Syrup", "$10", "12 - 550 ml bottles", 13, `<input type="checkbox">`],
    [4, "Chef Anton's Cajun Seasoning", "$22", "48 - 6 oz jars", 53, `<input type="checkbox">`],
    [5, "Chef Anton's Gumbo Mix", "$21.35", "36 boxes", 0, `<input type="checkbox" checked disabled>`],
    [6, "Grandma's Boysenberry Spread", "$25", "12 - 8 oz jars", 120, `<input type="checkbox">`],
    [7, "Uncle Bob's Organic Dries Pears", "$30", "12 - 1 lb pkgs", 15, `<input type="checkbox">`],
    [8, "Northwoods Cranberry Sauce", "$40", "12 - 12 oz jars", 6, `<input type="checkbox">`],
    [9, "Mishi Kobe Niku", "$97", "18 - 500 g pkgs", 29, `<input type="checkbox" disabled checked>`],
    [10, "Ikura", "$31", "12 - 200 ml jars", 31, `<input type="checkbox">`],
    [11, "Grandma's Boysenberry Spread", "$25", "12 - 8 oz jars", 120, `<input type="checkbox">`],
    [12, "Uncle Bob's Organic Dries Pears", "$30", "12 - 1 lb pkgs", 15, `<input type="checkbox">`],
    [13, "Northwoods Cranberry Sauce", "$40", "12 - 12 oz jars", 6, `<input type="checkbox">`],
    [14, "Mishi Kobe Niku", "$97", "18 - 500 g pkgs", 29, `<input type="checkbox" disabled checked>`],
    [15, "Ikura", "$31", "12 - 200 ml jars", 31, `<input type="checkbox">`],
]

pSize.addEventListener('change', curPageSize);

window.addEventListener('load', curPageSize);
 function curPageSize () {
     let size = pSize.value;
     // let tableToShow = [];
    for (let i = 0; i < size; i++) {
        let tr = document.createElement("tr");
            for (let j = 0; j <arr[i].length; j++) {
                let td = document.createElement("td");
                td.innerHTML = arr[i][j];
                tr.appendChild(td);
            }
            // tableToShow.push(tr);
            table.appendChild(tr)
        // while (tableToShow.length > size) {
        //     table.removeChild(table.lastChild);
        //     tableToShow.pop();
        // }
        while (table.childNodes.length-1 > size) {
            table.removeChild(table.children[0])
        }
    }
 }