const body = document.body;
const div = document.createElement("div");
const title = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");

input.setAttribute("id", "input");
input.setAttribute("type", "text");

input.placeholder = "New item here...";
div.style.cssText = "border: 1px solid black;"+
                    "padding: 5px;";

title.innerText = "Don't forget to:";
title.style.marginBottom = "15px";

body.appendChild(div);
div.appendChild(title);
div.appendChild(form);
form.appendChild(input);

form.addEventListener('click', makeChanges);

function appendButtons (...arg) {
    for (let i = 0; i < arg.length; i++) {
        const btn = document.createElement("button");
        btn.innerHTML = arg[i];
        btn.value = arg[i];
        btn.style.margin = '2px';
        form.appendChild(btn);
    }
}

function addItem (d) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const inputValue = document.getElementById('input');

    input.setAttribute('type', 'checkbox');
    if (inputValue.value !== '') {
        span.innerText = inputValue.value;
        title.append(d);
        d.append(label);
        label.append(input);
        label.append(span);
    }
    inputValue.value = '';

}

function removeSelected () {
    const input = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < input.length; i++) {
        if(input[i].checked) {
            input[i].parentElement.remove();
        }
    }
}

function hideSelected () {
    const input = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < input.length; i++) {
        if(input[i].checked) {
            input[i].parentElement.style.display = 'none';
        }
    }
}
function showHidden () {
    const input = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < input.length; i++) {
        if(input[i].checked) {
            input[i].parentElement.style.display = 'block';
        }
    }
}
function makeChanges (e) {
    e.preventDefault();
    const div = document.createElement('div');
    if (e.target && e.target.nodeName === 'BUTTON' && e.target.value === 'Add') {
        addItem(div);
    }
    if (e.target && e.target.nodeName === 'BUTTON'
        && e.target.value === 'Remove selected') {
        removeSelected();
    }
    if (e.target && e.target.nodeName === 'BUTTON'
        && e.target.value === 'Hide selected') {
        hideSelected();
    }
    if (e.target && e.target.nodeName === 'BUTTON'
        && e.target.value === 'Show hidden') {
        showHidden();
    }
}

appendButtons('Add', 'Remove selected', 'Hide selected', 'Show hidden');