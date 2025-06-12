function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

function changeText() {
    document.getElementById("btn-text").textContent = "Hello World";
}

function toggleBulb() {
    bulb = document.getElementById("bulb");
    if(bulb.src.match("bulb_off")) {
        bulb.src = "bulb_on.gif";
    }
    else {
        bulb.src = "bulb_off.gif";
    }
}
