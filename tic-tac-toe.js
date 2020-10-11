document.addEventListener('DOMContentLoaded', function(){
    
    // Variables
    var x = document.querySelectorAll("#board > div");
    var moves = [];
    var status = document.getElementById("status");
    var button = document.querySelector("button");
    var butt = document.getElementsByClassName("square");
    // Variables

    button.addEventListener("click", function() {
        location.reload(); //Refreshes the page when "New Game" is clicked
    });

    for(let i = 0; i < x.length; i++) {
        x[i].classList.add("square"); //Add square class to all <div> in the board
    }

    for(let j = 0; j < butt.length; j++) {
        butt[j].addEventListener("click", function() {
            if(butt[j].classList.contains("X") || butt[j].classList.contains("O")) {
                //Prevents players being able to override moves
            } else if(moves.length % 2 == 0) { //Every even numbered length in the array indicates X's turn
                butt[j].classList.add("X");
                butt[j].textContent = "X";
                moves.push("X");
            } else { //Every odd numbered length in the array indicates O's turn
                butt[j].classList.add("O");
                butt[j].textContent = "O";
                moves.push("O");
            }
            
            //All possible combinations for victory
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
                butt = null; //Prevents extra clicks when game finishes
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
                butt = null; //Prevents extra clicks when game finishes
            }
        });

        
        // Hover Effect
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
        // Hover Effect

    }
    
});