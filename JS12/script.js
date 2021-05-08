const data = 'http://localhost/denwer/JS12/01.data.json';
const url = 'http://localhost/denwer/JS12/index.html';
const getBtn = document.querySelector('#get');
const postBtn = document.querySelector('#post');
const formGet = document.querySelector('#getRequest');
const formPost = document.querySelector('#postRequest');

getBtn.addEventListener('click', get);
postBtn.addEventListener('click', post);

function get (e) {
    e.preventDefault();

    function getJSON (url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.addEventListener('load', function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error('Request failed!'))
                }
            });
            xhr.addEventListener('error', function () {
                reject(new Error('Network error!'));
            });
            xhr.send();
        });
    }

    getJSON(data)
        .then(function (jsonString) {
            jsonString.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <span class="firstName"><em>First name:</em> ${item.firstName};</span>
                    <span class="lastName"><em>Last name:</em> ${item.lastName};</span>
                    <span class="age"><em>Age:</em> ${item.age};</span>
                    `;
                formGet.prepend(div);
            })
        })
        .catch(function (err) {
            console.log(err);
        });
}

function post (e) {
    e.preventDefault();

    while (formPost.firstChild) {
        formPost.firstChild.remove();
    }
    const labelFirstName = document.createElement('label');
    const inputFirstName = document.createElement('input');
    const labelLastName = document.createElement('label');
    const inputLastName = document.createElement('input');
    const labelAge = document.createElement('label');
    const inputAge = document.createElement('input');
    const btn = document.createElement('button');

    labelFirstName.innerText = 'First Name:'
    labelLastName.innerText = 'Last Name:'
    labelAge.innerText = 'Age:'
    btn.innerText = 'Make post request'

    inputFirstName.setAttribute('id', 'firstName');
    inputLastName.setAttribute('id', 'lastName');
    inputAge.setAttribute('id', 'age');

    formPost.appendChild(labelFirstName);
    labelFirstName.append(inputFirstName);
    formPost.appendChild(labelLastName);
    labelLastName.appendChild(inputLastName);
    formPost.appendChild(labelAge);
    labelAge.appendChild(inputAge);
    formPost.append(btn);


    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const inpFirst = document.querySelector('#firstName');
        const inpLast = document.querySelector('#lastName');
        const inpAge = document.querySelector('#age');

        const person = {
            "firstName": inpFirst.value,
            "lastName" : inpLast.value,
            "age"      : inpAge.value,
        }

        function postJSON (url) {
            return new Promise(function (resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open('post', url);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.addEventListener('load', function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(person);
                    } else {
                        reject(new Error('Request failed!'))
                    }
                });
                xhr.addEventListener('error', function () {
                    reject(new Error('Network error!'));
                });
                xhr.send(person);
            });
        }

        postJSON(url)
            .then(function (object) {
                console.log(object);
                const div = document.createElement('div');
                div.innerHTML = `
                    <span class="firstName"><em>First name:</em> ${object.firstName};</span>
                    <span class="lastName"><em>Last name:</em> ${object.lastName};</span>
                    <span class="age"><em>Age:</em> ${object.age};</span>
                    `;
                document.querySelectorAll('label').forEach(item => {
                    item.style.display = 'none';
                })
                formPost.prepend(div);
            })
            .catch(function (err) {
                console.log(err);
            });
    })
}


