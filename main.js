"use strict"

const userNameInput = document.querySelector('input.username')
const tagbox= document.querySelector('.tagbox')

// const keyCode = document.querySelector('.keytype')


userNameInput.addEventListener('keydown',function(e){

   if(e.keyCode===13)
   {
       const value= userNameInput.value;
       const listItem = document.createElement('li');
       listItem.innerText=value;
       listItem.classList.add('matag');
       tagbox.appendChild(listItem);
       userNameInput.value=""

   }
    
})