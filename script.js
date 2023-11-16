const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach(function(button){
     button.addEventListener("click",()=>{
           if(button.classList.contains("add")){
            count++;
           }
           else if(button.classList.contains("lower")){
            count--;
           }

           const num = document.querySelector('.num');
           num.textContent = count;

           if(count < 0){
            num.style.color = "red";
           }
           else if(count > 0){
            num.style.color = "green";
           }
           else{
            num.style.color = "black";
           }
     })
})