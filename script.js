var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');
// input event listener to the colors

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandom(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256)
    //"rgb(r, g, b)"
    var newcolor1 = "rgb(" + r + ", " + g + ", " + b + ")";

    //pick a "red" from 0 to 255
    var r2 = Math.floor(Math.random() * 256)
    //pick a "green" from 0 to 255
    var g2 = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 to 255
    var b2 = Math.floor(Math.random() * 256)
    //"rgb(r, g, b)"
    var newcolor2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";

	body.style.background = 
	"linear-gradient(to right, " 
	+ newcolor1 
	+ ", " 
	+ newcolor2
	+ ")";

	css.textContent = body.style.background + ";";

}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", getRandom);



