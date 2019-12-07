const container = document.getElementById("grid-container");

for (let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.setAttribute('id', i + 1);
    box.setAttribute('class', "grid-item");
    box.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    });
    container.appendChild(box);
};

function resetBoxes() {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };
    for (let i = 0; i < 256; i++){
        let box = document.createElement('div');
        box.setAttribute('id', i + 1);
        box.setAttribute('class', "grid-item");
        box.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "black";
        });
        container.appendChild(box);
    };
};

function resizeBoxes() {
    let numOfBoxes = prompt("How many squares per side? ");
    let newSize = numOfBoxes * numOfBoxes;

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };

    for (let i = 0; i < newSize; i++){
        const box = document.createElement('div');
        box.setAttribute('id', i + 1);
        box.setAttribute('class', "grid-item");
        container.style.setProperty("grid-template-rows", "repeat(" + numOfBoxes + ", 1fr)");
        container.style.setProperty("grid-template-columns", "repeat(" + numOfBoxes + ", 1fr)");
        box.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "black";
        });
        container.appendChild(box);
    };
};

document.getElementById('resize').addEventListener('click', resizeBoxes);
document.getElementById('reset').addEventListener('click', resetBoxes);