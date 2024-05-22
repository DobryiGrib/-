const btns = document.querySelectorAll('.btn')
const allBtns = document.querySelectorAll('.button')
const image = document.querySelector('.img')
const trueAns = document.querySelector('[data-btn="01"]')
const h1 = document.querySelector('.h1')
const happyEnd = document.querySelector('.happyEnd')
const worstEnd = document.querySelector('.worstEnd')
const startBtnGood = document.querySelector('.goodBtn')
const startBtnWorst = document.querySelector('.worstBtn')
const img = document.querySelector('.img-punishment')
const btn = document.querySelector('.worst')

const china = new Const('china', './img/товарищ-Кси.png')
const mem = new Const('mem', './img/минус-кредит.png')
const taiwan = new Const('taiwan', './img/Тайвань.png')


function Const (name, src){
    this.name = name;
    this.src = src
}
image.src = taiwan.src
let taiwanName = image.setAttribute('data-name', taiwan.name)
let imageName = image.getAttribute('data-name')
trueAns.addEventListener('click', function(){
    allBtns.forEach(function(e){
        e.removeEventListener('mouseenter', myFunction)
        e.removeEventListener('mouseleave', taiwanImg)
    })
    trueAns.removeEventListener('mouseenter', myFunction1)
    happyEnd.classList.add('a')
    happyEnd.classList.remove('hidden')
})

btns.forEach(function(e){
    e.addEventListener('click', () => {
        worstEnd.classList.remove('hidden')
    
        setTimeout(() => {
        e.removeEventListener('mouseenter', myFunction)
        e.removeEventListener('mouseleave', taiwanImg)  
        trueAns.removeEventListener('mouseenter', myFunction1)
        trueAns.removeEventListener('mouseleave', taiwanImg) 
       }, 1500)

        setTimeout(() => {
            worstEnd.classList.add('longer')
            img.src = './img/social-kredit-2.gif'
        }, 8500)

        setTimeout(() => btn.classList.remove('hidden'), 9000)
    })
})

function myFunction() {
    smoothly(image, "src", mem.src);
    smoothly(h1, 'textContent', 'Осторожно!')
    setTimeout(() => btns.forEach(function(e){
        e.removeEventListener("mouseenter", myFunction)
    }), 2000)
}  

btns.forEach(function(e){
        e.addEventListener("mouseenter", myFunction); 
})

 
    trueAns.addEventListener('mouseenter', myFunction1)
    function myFunction1() {
            smoothly(image, "src",  china.src);
            smoothly(h1, 'textContent', 'Ты на верном пути товарищ')
            trueAns.removeEventListener("mouseenter", myFunction1);
    }

const taiwanImg =  () => {
    smoothly(image, "src", taiwan.src)
    smoothly(h1, "textContent", 'Что за флаг вы видите на картинке ?')
}

allBtns.forEach(function(e){
        e.addEventListener('mouseleave', taiwanImg)  
})

startBtnGood.onclick = () =>  window.location.href = './index.html'
startBtnWorst.onclick = () =>  window.location.href = './index.html'






