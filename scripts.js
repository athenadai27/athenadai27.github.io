  var slideIndex= 1;

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block"; 
	setTimeout(showSlides, 2000);
}

function showPopUp(i){
	var popup = document.getElementsByClassName("popAsset")[i];
	popup.classList.toggle("show");
}