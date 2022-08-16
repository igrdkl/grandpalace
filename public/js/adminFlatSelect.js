// let svgsBox = document.querySelector(''),
let svgs = document.querySelectorAll('.svg-box svg path');

svgs.forEach(element => {
    element.onclick = () => { element.classList.toggle('active-flat') }
});
// console.log(svgs);