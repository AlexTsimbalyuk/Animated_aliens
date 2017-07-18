var speech = document.getElementById("alien_says");
var eyes = document.querySelectorAll(".eyelids");
var mouth = document.querySelectorAll(".mouth");

animate();

setInterval(animate, 11500);

function animate(){ 
     
	setTimeout(function(){
	    speech.style.display = "block";
		speech.innerHTML = "The inhabitants of the planet Earth!";
		eyes[0].classList.add("active");
		eyes[1].classList.add("active");
		mouth[0].classList.add("active");
	},1500);
	
	setTimeout(function(){
		speech.innerHTML = "Now the planet on our control!"; 
	},5000);
	
	setTimeout(function(){
		speech.innerHTML = "SEE YOU IN HELL!"; 
	},8000);
	
	setTimeout(function(){
		speech.style.display = "none";
		eyes[0].classList.remove("active");
		eyes[1].classList.remove("active");
		mouth[0].classList.remove("active");
	},10500);
	
}