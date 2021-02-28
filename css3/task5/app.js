let val = document.querySelectorAll('.price');
let outVal = document.querySelectorAll('.valOut')

function out() {
    for (let i = 0; i < val.length; i++) {
        outVal[i].value = val[i].value;
    }
}
