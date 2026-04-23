let container = document.querySelector("#container");
for (i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("div");
    container.appendChild(div);
    
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "yellow"})
}
