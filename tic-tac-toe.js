document.addEventListener('DOMContentLoaded', function(){
    
    var x = document.querySelectorAll("#board > div");
    var moves = [];
    for(let i = 0; i < x.length; i++) {
        x[i].classList.add("square");
    }


    var butt = document.getElementsByClassName("square");
    for(let j = 0; j < butt.length; j++) {
        butt[j].addEventListener("click", function() {
            if(moves.length % 2 == 0) {
                butt[j].classList.add("X");
                butt[j].textContent = "X";
                moves.push("X");
            } else {
                butt[j].classList.add("O");
                butt[j].textContent = "O";
                moves.push("O");
            }
        });

        butt[j].addEventListener("mouseover", function() {
            if(moves.length % 2 == 0) {
                butt[j].classList.add("hover")
            } else {
                butt[j].classList.add("hover.O");
            }
        });
        butt[j].addEventListener("mouseout", function() {
            if(moves.length % 2 == 0) {
                butt[j].classList.remove("hover")
            } else {
                butt[j].classList.remove("hover.O");
            }
        });

    }
     
});