let container = document.querySelector("#container");
const inputNumber = document.querySelector("#inputNumber");
const inputBtn = document.querySelector("#inputBtn");

const form = document.querySelector("#form");
form.addEventListener("submit", e => e.preventDefault())

inputBtn.addEventListener("click", () => createGrid());
inputNumber.addEventListener("keyup", (e) => { 
    if (e.keyCode == 13) createGrid()
});

function randomNumber() {
    return Math.floor(Math.random(255 - 1) * 255);
};
let randomColor = `rgb(
${randomNumber()}, 
${randomNumber()}, 
${randomNumber()}`;

if (inputNumber.value == "") {
    
    for (i = 1; i <= 256; i++) {
        let div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
        div.style.flexBasis = `calc(1 / 16 * 100%)`

        let isMouseDown = false;
        let opacity = 0.1

        document.addEventListener("mousedown", (e) => {
            if (e.button === 0) isMouseDown = true;
        });

        document.addEventListener("mouseup", (e) => {
            if (e.button === 0) isMouseDown = false;
        });

        div.addEventListener("mouseenter", () => {
            
        if (isMouseDown) {
            div.style.backgroundColor = randomColor;
            opacity += 0.1
            div.style.opacity = opacity
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
        let opacity = 0.1
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
            div.style.backgroundColor = randomColor;
            opacity += 0.1
            div.style.opacity = opacity
            }
        });
        };
    };

}

