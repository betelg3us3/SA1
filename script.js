let num = 0;

function color(){

    if (num == 0) {
        document.body.style.backgroundColor = "rgb(34, 34, 43)";
        document.getElementById("background").style.borderColor = "rgb(158, 165, 179)";
    }

    else {
        document.body.style.backgroundColor = " rgb(237, 232, 238)";
        document.getElementById("background").style.borderColor = "rgb(51, 42, 57)";
        num = -1;
    }

    num++
}