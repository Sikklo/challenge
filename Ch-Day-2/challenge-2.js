var myLine = document.getElementById("myLine");
var lines = document.querySelectorAll(".line");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var animation = false;
myLine.onclick = () => {
    lines.forEach((line) => {
        line.classList.remove("noAnimation");

    })
    if (!animation) {
        line1.classList.add("line1-animation");
        line2.classList.add("line2-animation");
        line3.classList.add("line3-animation");
        line1.classList.remove("line1-animation-rev");
        line2.classList.remove("line2-animation-rev");
        line3.classList.remove("line3-animation-rev");
        animation = true;
    } else {
        line1.classList.add("line1-animation-rev");
        line2.classList.add("line2-animation-rev");
        line3.classList.add("line3-animation-rev");
        line1.classList.remove("line1-animation");
        line2.classList.remove("line2-animation");
        line3.classList.remove("line3-animation");
        animation = false
    }


}