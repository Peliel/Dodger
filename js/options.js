let ballSpeedAdjuster = document.getElementById("ran1"), 
    ballSpeedText = document.getElementById("val1");

ballSpeedAdjuster.min = 10;
ballSpeedAdjuster.max = 100;
ballSpeedAdjuster.value = 100;
val1.value = ballSpeedAdjuster.value;

let rectSpeedAdjuster = document.getElementById("ran2"), 
    rectSpeedText = document.getElementById("val2");

rectSpeedAdjuster.min = 10;
rectSpeedAdjuster.max = 100;
rectSpeedAdjuster.value = 100;
val2.value = rectSpeedAdjuster.value;

let wallSpeedAdjuster = document.getElementById("ran4"), 
    wallSpeedText = document.getElementById("val4");

wallSpeedAdjuster.min = 10;
wallSpeedAdjuster.max = 100;
wallSpeedAdjuster.value = 100;
val4.value = wallSpeedAdjuster.value;

ballSpeedAdjuster.oninput = function() {
    val1.value = ballSpeedAdjuster.value;
}

ballSpeedText.onchange = function() {
    if (val1.value != "") {
        val1.value = Number.parseInt(val1.value) || 0;
    } else {
        val1.value = 0;
    }

    if (val1.value > 1000) {
        val1.value = 1000;
    } else if (val1.value < 0) {
        val1.value = 0;
    }

    ballSpeedAdjuster.value = val1.value;
}

ballSpeedText.oninput = function() {
    if (val1.value != "") {
        val1.value = Number.parseInt(val1.value) || 0;
    } else {
        val1.value = 0;
    }

    if (val1.value > 1000) {
        val1.value = 1000;
    } else if (val1.value < 0) {
        val1.value = 0;
    }

    ballSpeedAdjuster.value = val1.value;
}

rectSpeedAdjuster.oninput = function() {
    val2.value = rectSpeedAdjuster.value;
}

rectSpeedText.onchange = function() {
    if (val2.value != "") {
        val2.value = Number.parseInt(val2.value);
    } else {
        val2.value = 0;
    }

    if (val2.value > 1000) {
        val2.value = 1000;
    } else if (val2.value < 0) {
        val2.value = 0;
    }

    rectSpeedAdjuster.value = val2.value
}

rectSpeedText.oninput = function() {
    if (val2.value != "") {
        val2.value = Number.parseInt(val2.value);
    } else {
        val2.value = 0;
    }

    if (val2.value > 1000) {
        val2.value = 1000;
    } else if (val2.value < 0) {
        val2.value = 0;
    }

    rectSpeedAdjuster.value = val2.value
}

wallSpeedAdjuster.oninput = function() {
    val4.value = wallSpeedAdjuster.value;
}

wallSpeedText.onchange = function() {
    if (val4.value != "") {
        val4.value = Number.parseInt(val4.value);
    } else {
        val4.value = 0;
    }

    if (val4.value > 1000) {
        val4.value = 1000;
    } else if (val4.value < 0) {
        val4.value = 0;
    }

    wallSpeedAdjuster.value = val4.value;
}

wallSpeedText.oninput = function() {
    if (val4.value != "") {
        val4.value = Number.parseInt(val4.value);
    } else {
        val4.value = 0;
    }

    if (val4.value > 1000) {
        val4.value = 1000;
    } else if (val4.value < 0) {
        val4.value = 0;
    }

    wallSpeedAdjuster.value = val4.value;
}