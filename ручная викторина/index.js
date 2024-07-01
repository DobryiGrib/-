import imgArr from './arr.js'
const btnStart = document.querySelector('.btn-start')
const btnPlay = document.querySelector('.btn-play')
const modal = document.querySelector('.modal')
const btn01 = document.querySelector('[data-btn="01"]');
const btn02 = document.querySelector('[data-btn="02"]');
const btn03 = document.querySelector('[data-btn="03"]');
const btn04 = document.querySelector('[data-btn="04"]');
const h2 = document.querySelector('.h2')
const fifty = document.getElementById('50')
let lamp = document.getElementById('lamp')
const twoAttemps = document.getElementById('fact')
const arrow = document.getElementById('arrow')
let btnArr = [btn01, btn02, btn03, btn04]
const btns = document.querySelectorAll('[data-btn]');
const imgDiv = document.querySelector('.question');
let cloneArr = shuffleArray(imgArr) 
let imgNum = 48;   
let answered = false;
let btnClick;
function newLoc(){
    window.location.href = './test.html';
}
btnStart.onclick = () => location.reload()
btnPlay.onclick = newLoc
showQuestion() 
btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        btnClick = event.target.innerText;
        if (!answered) {
            // answered = true; // Делаем кнопку неактивной после первого нажатия
        
             if (btnClick == cloneArr[imgNum].name && event.target.classList.contains('noAttemp') || btnClick == cloneArr[imgNum].name && event.target.classList.contains('attemp')) {
                btns.forEach((i) => {
                    i.classList.remove('attemp')
                    i.classList.add('noAttemp')
                })
                 btnArr.forEach(i => i.classList.remove('white'))
                 btnArr.forEach(i => i.classList.remove('red'))
                event.target.closest('.button').classList.add('green') 
            } else if (btnClick !== cloneArr[imgNum].name && event.target.classList.contains('attemp') && !event.target.classList.contains('noAttemp') ){
                btnArr.forEach(i => i.classList.remove('white'))
                btnArr.forEach(i => i.classList.remove('green'))
                event.target.closest('.button').classList.add('red')
                imgNum = imgNum;
                btns.forEach((i) => {
                    i.classList.add('noAttemp')
                })
            } else  if (btnClick !== cloneArr[imgNum].name && event.target.classList.contains('noAttemp')){
                btns.forEach((i) => {
                    i.classList.remove('attemp')
                })
                btnArr.forEach(i => i.classList.remove('white'))
                btnArr.forEach(i => i.classList.remove('green'))
                    event.target.closest('.button').classList.add('red')
                    let a = btnArr.find(i => i.innerText == cloneArr[imgNum].name).closest('.button')
                    a.classList.add('green')      
                } 

            if (imgNum == cloneArr.length - 1 && !event.target.classList.contains('attemp')) {
                answered = false
                setTimeout(() => modal.classList.remove('hidden'), 1500)
                return;
            } else if (imgNum < cloneArr.length - 1 && !event.target.classList.contains('attemp')){
                imgNum ++;
                setTimeout(showQuestion, 1500)
            }
        }
        
     });
    });
    
function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

function showQuestion() {
    btnArr.forEach(i => i.classList.remove('hidden'))
    btnArr.forEach(i => i.classList.remove('green'))
    btnArr.forEach(i => i.classList.remove('red'))
    btnArr.forEach(i => i.classList.add('white'))
    h2.innerText = `${imgNum + 1}/${imgArr.length}`
  answered = false;
  let filterBtns = cloneArr.filter(i => i.name !== cloneArr[imgNum].name)
  shuffleArray(filterBtns)
    let filterBtn = filterBtns.slice(0, 4)
  shuffleArray(btnArr)
  let numArr = [0, 1, 2, 3];
  shuffleArray(numArr);
  btnArr[0].innerText = filterBtn[numArr[0]].name;
  btnArr[1].innerText = filterBtn[numArr[1]].name;
  btnArr[2].innerText = filterBtn[numArr[2]].name;
  btnArr[3].innerText = cloneArr[imgNum].name

    // Отображаем изображение для текущего вопроса
    const imgTemplate = `<img class="img" src="%img%" alt="Question Image">`
   imgDiv.innerHTML = imgTemplate.replace('%img%', cloneArr[imgNum].img)
   shuffleArray(btnArr)
let hideBtn = btnArr.filter(i => i.innerText !== cloneArr[imgNum].name)
let trueAns = btnArr.find(i => i.innerText == cloneArr[imgNum].name)

    fifty.onclick = () => { 
        hideBtn[0].classList.add('hidden')
    hideBtn[1].classList.add('hidden')
    fifty.classList.add('hidden')
  }
    lamp.onclick = () => {
        let trueBtn = setInterval(() => {
            lamp.classList.add('hidden')
            setTimeout(() => {
                trueAns.classList.remove('white')
                trueAns.classList.add('green')
            }, 50)
            setTimeout( () => {
                trueAns.classList.remove('green')
                trueAns.classList.add('white')
            }, 500)
        }, 500)
        let a = setTimeout(() => clearInterval(trueBtn), 1000)
    };
    arrow.onclick = () => {
        imgNum++
        arrow.classList.add('hidden')
        showQuestion()
    }

    twoAttemps.onclick = () => {
        btns.forEach((i) => {
            i.classList.remove('noAttemp')
            i.classList.add('attemp')
        })
        twoAttemps.classList.add('hidden')
    }
}

