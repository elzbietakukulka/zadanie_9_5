
function getButton() {
	var elementsWithButton = document.getElementsByClassName('button');
	return elementsWithButton;
}

var b = getButton(); // array with button with class 'button'
console.log(b);

var l = b.length // lenght of the array with buttons


function showContentOfButtons(b,l) {
	for (var i=0; i<l; i++) {
		alert(b[i].innerText);
	}
}

showContentOfButtons(b,l);