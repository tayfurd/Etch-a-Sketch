let container = document.querySelector("#container");
const inputNumber = document.querySelector("#inputNumber");
const inputBtn = document.querySelector("#inputBtn");

const form = document.querySelector("#form");
form.addEventListener("submit", e => e.preventDefault())

inputBtn.addEventListener("click", () => createGrid());
inputNumber.addEventListener("keyup", (e) => { 
    if (e.keyCode == 13) createGrid()
});

if (inputNumber.value == "") {
    for (i = 1; i <= 256; i++) {
        let div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
        div.style.flexBasis = `calc(1 / ${16} * 100%)`

        let isMouseDown = false;

        document.addEventListener("mousedown", (e) => {
            if (e.button === 0) isMouseDown = true;
        });

        document.addEventListener("mouseup", (e) => {
            if (e.button === 0) isMouseDown = false;
        });

        div.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                div.style.backgroundColor = "yellow"
            }
        });    
    };
}

function createGrid(e) {
    let number = inputNumber.value;
     if (number === "") {
        inputNumber.focus() 
        return;
    }
    else if (number > 100) { 
        alert("You have entered a number greater than 100.");
        return;
    }

    document.querySelectorAll(".div").forEach(element => {
        element.remove();
    });
    

    if (number < 101 && number > 0) {
        for (i = 1; i <= number * number; i++) {
        let div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
        div.style.flexBasis = `calc(1 / ${number} * 100%)`

        /* 
        isMouseDown
            If mousedown = true
            if mouseup = false
            if click = false
                if it is true, change background,
                if it is not, do not
        */
       let isMouseDown = false;

        document.addEventListener("mousedown", (e) => {
            if (e.button === 0) isMouseDown = true;
        });

        document.addEventListener("mouseup", (e) => {
            if (e.button === 0) isMouseDown = false;
        });

        div.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                div.style.backgroundColor = "yellow"
            }
        });
        };
    };

}

