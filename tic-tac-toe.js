document.addEventListener('DOMContentLoaded', function(){
    
    var x = document.querySelectorAll("#board > div");
    var moves = [];
    var status = document.getElementById("status");

    for(let i = 0; i < x.length; i++) {
        x[i].classList.add("square");
        x[i].id = "square" + i
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
            if((butt[0].classList.contains("X") && butt[1].classList.contains("X") && butt[2].classList.contains("X")) 
            || (butt[3].classList.contains("X") && butt[4].classList.contains("X") && butt[5].classList.contains("X")) 
            || (butt[6].classList.contains("X") && butt[7].classList.contains("X") && butt[8].classList.contains("X")) 
            || (butt[0].classList.contains("X") && butt[3].classList.contains("X") && butt[6].classList.contains("X")) 
            || (butt[1].classList.contains("X") && butt[4].classList.contains("X") && butt[7].classList.contains("X")) 
            || (butt[2].classList.contains("X") && butt[5].classList.contains("X") && butt[8].classList.contains("X")) 
            || (butt[0].classList.contains("X") && butt[4].classList.contains("X") && butt[8].classList.contains("X")) 
            || (butt[2].classList.contains("X") && butt[4].classList.contains("X") && butt[6].classList.contains("X"))) {
                status.textContent = "Congratulations! X is the Winner!";
                status.classList.add("you-won");
            } else if((butt[0].classList.contains("O") && butt[1].classList.contains("O") && butt[2].classList.contains("O")) 
            || (butt[3].classList.contains("O") && butt[4].classList.contains("O") && butt[5].classList.contains("O")) 
            || (butt[6].classList.contains("O") && butt[7].classList.contains("O") && butt[8].classList.contains("O")) 
            || (butt[0].classList.contains("O") && butt[3].classList.contains("O") && butt[6].classList.contains("O")) 
            || (butt[1].classList.contains("O") && butt[4].classList.contains("O") && butt[7].classList.contains("O")) 
            || (butt[2].classList.contains("O") && butt[5].classList.contains("O") && butt[8].classList.contains("O")) 
            || (butt[0].classList.contains("O") && butt[4].classList.contains("O") && butt[8].classList.contains("O")) 
            || (butt[2].classList.contains("O") && butt[4].classList.contains("O") && butt[6].classList.contains("O"))) {
                status.textContent = "Congratulations! O is the Winner!";
                status.classList.add("you-won");
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
            butt[j].classList.remove("hover");
            butt[j].classList.remove("hover.O");
        });

    }
     
});