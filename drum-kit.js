window.addEventListener('keydown', function(event) {
	// console.log(event.keyCode);
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	console.log(audio);

});