//your JS code here. If required.
let p= document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
let counter = 0;
p.innerText = counter;
btn.addEventListener("click", onClick);

function onClick() {
	alert(counter);
	counter++;
	p.innerText = counter;
}