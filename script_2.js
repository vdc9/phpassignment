//waiting for html to load then calling js
$(document).ready(function(){
    //calling the actual images not the div holdling them
    var slides= $(".image");
    //Where the slideshow should start
    var slideIndex = 0;
    //sets slide index as first slide
    var slide = slides[slideIndex];

    //hiding the all of the images
	slides.hide();
	//show first slide
	slides.first().show();

	//when next is clicked button
	$(".next").click(function() {
	 	
	 	//hides current slide
	    $(slide).hide();
	    //moves slide one forward
	    slideIndex++; 

	    //if index is more than 4
	    if(slideIndex > 4) {

	     	//return to first slide
	  		slideIndex = 0;
	    }

	    //set new index to current slide
	    slide = slides[slideIndex]

	    //show the current slide
	    $(slide).show();

	   }); 
	//when the back button is clicked
	$(".prev").click(function() {

		  //hide the current slide	
		  $(slide).hide();

		  //decreasing by one
		  slideIndex--; 

		  //if slide index is less t han 0
		  if(slideIndex < 0) {

		  	//go to 4th image 
	  		slideIndex = 4;
	  	}
	//set the new slide index to current slide  		
	slide = slides[slideIndex];

	//show current slide
	$(slide).show();  	

	  });

});


