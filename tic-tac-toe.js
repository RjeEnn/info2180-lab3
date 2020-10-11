document.addEventListener('DOMContentLoaded', function(){
     var x = document.querySelectorAll("#board > div")
     for(let i = 0; i < x.length; i++) {
         x[i].classList.add("square");
     }
});