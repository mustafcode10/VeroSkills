const getH1 = document.querySelector('h1')
const getCss = window.getComputedStyle(getH1)
console.log(getCss)
const elementValuePro = getCss.getPropertyValue('border')
console.log(elementValuePro)