let pSize = document.querySelector('#pageSize');
let table = document.querySelectorAll('table tbody tr');
let arr = Array.from(table);

window.addEventListener('load', curPageSize);
pSize.addEventListener('change', curPageSize);
 function curPageSize () {
     let curSize = pSize.value;
     for (let i = 0; i < arr.length; i++) {
         if (i >= curSize) {
             arr[i].setAttribute('hidden', 'true')
         } else {
             arr[i].removeAttribute('hidden')
         }
     }
 }