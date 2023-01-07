console.log("Let's make Fizz Buzz!")

const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const main = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const refreshButton = document.getElementById("refreshButton");

// starting value on page refresh.
    inputMin.value = 1;
    inputMax.value = 100;

const create = function () {            //Creating function that will generate 100 divs.
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    //this line creates 100 divs and hides all that do not match input values.

    for (let i = 1; i <= 100; i++) {     
    // for( i = inputMin.value; i <= inputMax.value; i++ ) { // <--- 'UNcomment' this line to create divs according to input values.
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);    // giving "id" name to every div

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");   // this adds class to divs

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();


// Buttons RESET and REFRESH

    resetButton.onclick = function() {
        inputMin.value = "";
        inputMax.value = "";
        create();
    };
    
    refreshButton.onclick = function() {
        inputMin.value = 1;
        inputMax.value = 100;
        create();
    };



// JQuery scripts for selecting divs according to class:

    $(document).ready(function(){ $("#fizzButton").click(function(){ 
        $(".num, .buz, .fizbuz").toggle();
      });
    });

    $(document).ready(function(){ $("#buzzButton").click(function(){ 
        $(".num, .fiz, .fizbuz").toggle();
      });
    });

    $(document).ready(function(){ $("#fizzbuzzButton").click(function(){ 
        $(".num, .buz, .fiz").toggle();
      });
    });






