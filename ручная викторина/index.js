import imgArr from './arr.js'
const btnStart = document.querySelector('.btn-start')
const btnPlay = document.querySelector('.btn-play')
const modal = document.querySelector('.modal')
const btn01 = document.querySelector('[data-btn="01"]');
const btn02 = document.querySelector('[data-btn="02"]');
const btn03 = document.querySelector('[data-btn="03"]');
const btn04 = document.querySelector('[data-btn="04"]');
const h2 = document.querySelector('.h2')
console.log(h2)
let btnArr = [btn01, btn02, btn03, btn04]
const btns = document.querySelectorAll('[data-btn]');
const imgDiv = document.querySelector('.question');
let cloneArr = shuffleArray(imgArr) 
let imgNum = 0;   
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
            answered = true; // Делаем кнопку неактивной после первого нажатия
           
            if (btnClick == cloneArr[imgNum].name) {
                 btnArr.forEach(i => i.classList.remove('white'))
                 btnArr.forEach(i => i.classList.remove('red'))
                event.target.closest('.button').classList.add('green')
            }else {
                btnArr.forEach(i => i.classList.remove('white'))
                btnArr.forEach(i => i.classList.remove('green'))
                event.target.closest('.button').classList.add('red')
               let a = btnArr.find(i => i.innerText == cloneArr[imgNum].name).closest('.button')
               a.classList.add('green')
            }
            
            if (imgNum == cloneArr.length - 1) {
                answered = false
                setTimeout(() => modal.classList.remove('hidden'), 1500)
                return;
            } else if (imgNum < cloneArr.length - 1){
                imgNum ++;
                console.log(imgNum)
                event.target.closest('.button').classList.add('active')
                setTimeout(showQuestion, 1500)
            }
        }
     });
    });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function showQuestion() {
    btnArr.forEach(i => i.classList.remove('green'))
    btnArr.forEach(i => i.classList.remove('red'))
    btnArr.forEach(i => i.classList.add('white'))
    h2.innerText = `${imgNum + 1}/${imgArr.length}`
  answered = false;
  let filterBtns = cloneArr.filter(i => i.name !== cloneArr[imgNum].name)
  shuffleArray(filterBtns)
    let filterBtn = filterBtns.slice(0, 4)
  shuffleArray(btnArr)
  for(let i of filterBtn){
  }
  let numArr = [0, 1, 2, 3];
  shuffleArray(numArr);
  btnArr[0].innerText = filterBtn[numArr[0]].name;
  btnArr[1].innerText = filterBtn[numArr[1]].name;
  btnArr[2].innerText = filterBtn[numArr[2]].name;
  btnArr[3].innerText = cloneArr[imgNum].name
    // Отображаем изображение для текущего вопроса
    const imgTemplate = `<img class="img" src="%img%" alt="Question Image">`
   imgDiv.innerHTML = imgTemplate.replace('%img%', cloneArr[imgNum].img)
}




   
    




