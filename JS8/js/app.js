let create = document.getElementById('create'),
      animate = document.getElementById('animate'),
      consoleJS = document.getElementById('console'),
      CenterX = 400,
      CenterY = 450,
      radius = 150,
      input = document.getElementById('numberOfDivs');

let numberOfDivs,
    circle = [];

create.addEventListener('click', createDivs);
animate.addEventListener('click', moveDiv);

function createDivs (e) {
    e.preventDefault();
    numberOfDivs = +input.value;
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement("div");
        div.style.cssText = 'width: 20px;' +
                            'height: 20px;' +
                            'border-radius: 50%;' +
                            'background: white;' +
                            'position: absolute;';
        div.className = 'circle' + i;

        circle.push(div);

        let x = (CenterX + radius * Math.cos( 2 * Math.PI * i / numberOfDivs)),
            y = (CenterY + radius * Math.sin(2 * Math.PI * i / numberOfDivs));

        div.style.left = `${x}px`;
        div.style.top = `${y}px`;

        consoleJS.appendChild(div);
    }
    console.log(circle);
}


function moveDiv(e) {
    e.preventDefault();
    const speed = 100;
    let init = 0,
        angle = 2 * Math.PI / 30;

    for (let i = 0; i < numberOfDivs; i++) {

        let move = setTimeout(function interval() {

            init += angle;
            let x = Math.floor(CenterX + radius * Math.sin(init)),
                y = Math.floor(CenterY + radius * Math.cos(init));

            circle[i].style.left = `${x}px`;
            circle[i].style.top = `${y}px`;
            move = setTimeout(interval, speed);
        }, speed)
    }
}



