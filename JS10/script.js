const task = document.getElementById('task');
task.style.marginTop = '30px';

// Task1
document.getElementById('canvas')
    .addEventListener('click',
        function (e) {
            e.preventDefault();
            clearResult();
            let canvasCreate = document.createElement('canvas');
            task.append(canvasCreate);

            let canvas = document.querySelector('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            let ctx = canvas.getContext('2d');

            // Лицо
            ctx.beginPath();
            ctx.fillStyle = "#90cad7";
            ctx.strokeStyle = "#22545f";
            ctx.lineWidth = '2';
            ctx.scale(1, 0.9);
            ctx.arc(100, 150, 60, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // Глаза
            ctx.beginPath();
            ctx.ellipse(65, 130, 9, 7, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.ellipse(115, 130, 9, 7, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = "#22545f";
            ctx.ellipse(63, 130, 2, 6, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.ellipse(113, 130, 2, 6, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            //Нос
            ctx.beginPath();
            ctx.moveTo(88, 130);
            ctx.lineTo(75, 160);
            ctx.lineTo(88, 160);
            ctx.stroke();
            ctx.closePath();

            //Рот
            ctx.beginPath();
            ctx.ellipse(90, 180, 8, 23, 1.7, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            //Шляпа
            ctx.beginPath();
            ctx.fillStyle = '#396693';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = '4';
            ctx.ellipse(100, 100, 75, 20, 0, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.ellipse(100, 30, 40, 12, 0, 0, Math.PI * 2, true);
            ctx.moveTo(60, 30);
            ctx.lineTo(60, 90);
            ctx.moveTo(140, 30);
            ctx.lineTo(140, 90);
            ctx.fillRect(60, 30, 80, 60);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(100, 90, 40, 12, 0, 0, Math.PI, false);
            ctx.fill();
            ctx.stroke();


            //Велосипед

            ctx.beginPath();
            ctx.fillStyle = "#90cad7";
            ctx.strokeStyle = "#337d8f";
            ctx.lineWidth = '2';
            ctx.arc(130, 400, 60, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(350, 400, 60, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.moveTo(350, 400);
            ctx.lineTo(330, 290);
            ctx.lineTo(280, 300);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(330, 290);
            ctx.lineTo(370, 250);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(210, 375);
            ctx.lineTo(270, 420);
            ctx.stroke();
            ctx.clearRect(220, 385, 35, 35);
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(130, 400);
            ctx.lineTo(240, 400);
            ctx.lineTo(334, 320);
            ctx.lineTo(200, 320);
            ctx.lineTo(130, 400);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(240, 400);
            ctx.lineTo(190, 300);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(164, 300);
            ctx.lineTo(215, 300);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(240, 398, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            //Дом
            ctx.beginPath();
            ctx.rect(450, 250, 445, 335);
            ctx.fillStyle = '#975b5b';
            ctx.strokeStyle = '#000';
            ctx.fill();
            ctx.stroke();

            //Окна
            ctx.beginPath();
            ctx.rect(480, 290, 160, 105);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(480, 343);
            ctx.lineTo(640, 343);
            ctx.strokeStyle = '#975b5b';
            ctx.lineWidth = '4';
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(562, 290);
            ctx.lineTo(562, 396);
            ctx.stroke();

            ctx.beginPath();
            ctx.rect(700, 290, 160, 105);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(700, 343);
            ctx.lineTo(860, 343);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(782, 290);
            ctx.lineTo(782, 396);
            ctx.stroke();

            ctx.beginPath();
            ctx.rect(700, 435, 160, 105);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(700, 487);
            ctx.lineTo(860, 487);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(782, 434);
            ctx.lineTo(782, 540);
            ctx.stroke();

        //    Крыша
            ctx.beginPath();
            ctx.moveTo(450, 250);
            ctx.lineTo(895, 250);
            ctx.lineTo(674, 4);
            ctx.lineTo(450, 250);
            ctx.strokeStyle = '#000';
            ctx.lineJoin = 'round';
            ctx.fillStyle = '#975b5b';
            ctx.fill();
            ctx.stroke();

        //    Дымоход
            ctx.beginPath();
            ctx.moveTo(759, 195);
            ctx.lineTo(759, 70);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(805, 195);
            ctx.lineTo(805, 70);
            ctx.stroke();
            ctx.fillRect(761, 70, 42, 125);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(782, 69, 22, 7, 0, 0, 2 * Math.PI);
            ctx.lineWidth = '6';
            ctx.stroke();
            ctx.fill();

        //    Дверь
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = '#000';
            ctx.moveTo(490, 585);
            ctx.lineTo(490, 473);
            ctx.ellipse(553, 470, 63, 40, 0, Math.PI, 0, false);
            ctx.moveTo(616, 470);
            ctx.lineTo(616, 585);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(553, 430);
            ctx.lineTo(553, 585);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(535, 540,6, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(569, 540,6, 0, 2 * Math.PI);
            ctx.stroke();
        })

//Task2
document.getElementById('trash')
    .addEventListener('click', runTask2);

function runTask2 (e) {
    e.preventDefault();
    clearResult();
    const div = document.createElement('div');
    const img = document.createElement('img');
    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.innerHTML = 'разбросать';
    input.setAttribute('placeholder', 'Количество мусора:')
    img.setAttribute('src', 'img/trash.png');
    img.setAttribute('class', 'trash');

    task.append(input);
    task.append(btn);
    task.append(img);
    task.append(div);

    btn.addEventListener('click', run);

    function run (e) {
        e.preventDefault();

        const input = document.querySelector('input');
        const val = +input.value;

        function generateRandom () {
            let x = Math.round(Math.random() * 90);
            let y = Math.round(Math.random() * 90);
            return {
                x: x,
                y: y,
            }
        }

        function setPaper () {
            let paper;
            for (let i = 0; i < val; i++) {
                paper = document.createElement('img');
                paper.setAttribute('src', 'img/paper.png');
                paper.setAttribute('class', `paper`);
                paper.setAttribute('data-img', `${i + 1}`);
                let x = generateRandom().x;
                let y = generateRandom().y;
                paper.style.left = `${x}%`;
                paper.style.top = `${y}%`;
                div.appendChild(paper);
            }
        }

        setPaper();

        const paper = document.querySelectorAll('.paper');
        const trash = document.querySelector('.trash');

        paper.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragend', dragEnd);
        });

        trash.addEventListener('dragover', dragOver);
        trash.addEventListener('dragenter', dragEnter);
        trash.addEventListener('dragleave', dragLeave);
        trash.addEventListener('drop', dragDrop);

        function dragOver (e) {
            e.preventDefault();
        }

        function dragEnter () {
            this.style.transform = 'scale(1.1)';
        }

        function dragLeave () {
            this.style.transform = 'scale(1)';
        }

        function dragDrop (e) {
            e.preventDefault();
            this.src = 'img/trash-full.png';
            this.style.transform = 'scale(1)';
            const dragFlag = e.dataTransfer.getData('dragItem');
            const dragItem = document.querySelector(`[data-img="${dragFlag}"]`);
            dragItem.remove();

        }

        function dragStart (e) {
            e.dataTransfer.setData('dragItem', this.dataset.img);
            setTimeout(() => {
                this.classList.add('hide');
            }, 0)
        }

        function dragEnd (e) {
            e.preventDefault();
            this.classList.remove('hide');
        }

    }

}

function clearResult () {
    while (task.firstChild) {
        task.removeChild(task.firstChild);
    }
}