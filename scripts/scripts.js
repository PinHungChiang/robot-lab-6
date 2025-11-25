/****************** create variables ******************/
let modelName = "XYZ";
let duration = 0;


/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");

    let totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost.toFixed(2);
}


/****************** model button logic ******************/

let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");

    let newDuration = prompt("Enter new duration:");

    let parsed = parseInt(newDuration);

    if (!isNaN(parsed) && parsed > 0) {
        duration = parsed;
    }

    durationText.innerHTML = duration.toString();

    recalculate();
}

durationButton.addEventListener("click", changeDuration);




