function calc() {
	var front = document.getElementById('front').value;
	var rear  = document.getElementById('rear').value;
	var dist  = document.getElementById('distance').value;
	
	var diff = Math.abs(front - rear);
	
	var triSide = diff / 2.0;
	
	var angle = Math.atan(triSide / dist) * (180.0 / Math.PI);
	
	document.getElementById('result').innerHTML = (angle * 2) + " degrees of total toe " + (front > rear ? "out." : "in.");
	document.getElementById('assumption').innerHTML = "If toe is equal on both sides, then each wheel has " + angle + " degrees of toe " + (front > rear ? "out." : "in");
}