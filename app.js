// const mybutton = document.querySelector('.btn');
// let outPutScreen = document.querySelector('.output_num');
// // let colors = ['#576574', '#1dd1a1', '#8395a7', '#ff9ff3']; //optional 
// let colors = getRandomColor();
// let randomNum = getRandomColor();
// //the current background color
// let currentBackgroundColor = document.body.style.backgroundColor = randomNum;


// mybutton.addEventListener('click', function () {

//    document.body.style.backgroundColor = randomNum; 
//    outPutScreen.textContent = currentBackgroundColor;
//    outPutScreen.style.backgroundColor = '#000';
//    let colorCode =  outPutScreen.style.backgroundColor = '#000';

//    if (outPutScreen.textContent !== '') {

//        localStorage.setItem('myColor', currentBackgroundColor);
//    }if (colorCode !== null) {
//     localStorage.setItem('colorText', colorCode)

//    }
// });

// function getRandomNum() {
//     return Math.floor(Math.random() * colors.length);
// } 

// //background color generator 
// function getRandomColor() {
//     let numAndLetters = '0123456789ABCDEFG';
//     let color = '#';

//     for (let i = 0; i < 6; i++) {

//         color += numAndLetters[Math.floor(Math.random() * 16 )];
//     }

//     return color;
    
// }
// //check if there is colors in local storage
// let colorBackground = localStorage.getItem('myColor');
// let colorCodeHex = localStorage.getItem('colorCode');

// if (colorBackground !== null) {

//     document.body.style.backgroundColor = localStorage.getItem('myColor');
//      console.log(colorCodeHex);
// }

// if (colorCodeHex !== null) {
//     outPutScreen.style.backgroundColor = localStorage.getItem('colorCode');
// }
let form = document.querySelector('.form');
let input = document.querySelector('#input');
let todos = document.querySelector('.links');
let button = document.querySelector('.submit_task');
let listItem = localStorage.getItem('listItem');
const mainContainer = document.querySelector('.container');




button.onclick = function formVaildation(e){
   const todoText = input.value;

   if(todoText){
      let todoEl = document.createElement('li');
      let deletEl = document.createElement('i');
      deletEl.className = 'fas fa-trash delete';
      todoEl.innerText = todoText;
      todos.appendChild(todoEl);
      todoEl.appendChild(deletEl);
      //delete button on li items 
      deletEl.addEventListener('click', () =>{
         todoEl.remove();
      });
     if (todos) {
        console.log('yes contain');
        localStorage.setItem('listItem', todoEl);
     }
   }


   if (todoText === '') {
      let popUp = document.createElement('div');
      let popUpText = document.createElement('p');
      let popUpBtn = document.createElement('button');

      popUpBtn.className = 'popupButton';
      popUpBtn.innerText = 'close';
      popUpText.className = 'popup-text';
      popUpText.innerText = 'write something to complete';
      popUp.className = 'popup-alert';

     popUpBtn.addEventListener('click', () =>{
      popUp.remove();
     });

      popUp.appendChild(popUpText);
      popUp.appendChild(popUpBtn);
      mainContainer.appendChild(popUp);

    }

 
};



   
form.onsubmit = function formVaildation(e){
   const todoText = input.value;

   if(todoText){
      let todoEl = document.createElement('li');
      let deletEl = document.createElement('i');
      deletEl.className = 'fas fa-trash delete';
      todoEl.innerText = todoText;
      todos.appendChild(todoEl);
      todoEl.appendChild(deletEl);
      //delete button on li items 
      deletEl.addEventListener('click', () =>{
         todoEl.remove();
      });
     if (todos) {
        console.log('yes contain');
        localStorage.setItem('listItem', todoEl);
     }
   }


   if (todoText === '') {
      let popUp = document.createElement('div');
      let popUpText = document.createElement('p');
      let popUpBtn = document.createElement('button');

      popUpBtn.className = 'popupButton';
      popUpBtn.innerText = 'close';
      popUpText.className = 'popup-text';
      popUpText.innerText = 'write something to complete';
      popUp.className = 'popup-alert';

     popUpBtn.addEventListener('click', () =>{
      popUp.remove();
     });

      popUp.appendChild(popUpText);
      popUp.appendChild(popUpBtn);
      mainContainer.appendChild(popUp);

    }

 
};