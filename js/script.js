console.log("image filter app");

$("#animals").click(function(){
	$("#a1").show();
	$("#a2").show();
	$("#a3").show();
	$("#swapFilters").show();
})

$("#swapFilters").click(function(){
	$("#grayscale").show();
	$("#sepia").show();
	$("#saturate").show();
	$("#og").show();
	$("#backAnimal").show();
	$("#swapBorder").show();
})


//making image greyscale
$("#grayscale").click(function(){
	$(".zebraImg").css("filter","grayscale(100%)");
})

$("#sepia").click(function(){
	$(".zebraImg").css("filter","sepia(60%");
})

$("#saturate").click(function(){
	$(".zebraImg").css("filter","saturate(50%");
})

$("#og").click(function(){
	$(".zebraImg").css("filter","");
})

$("#swapBorder").click(function(){
	$("#optionOne").show();
	$("#optionTwo").show();
	$("#optionThree").show();
	$("#optionFour").show();
	$("#backFilter").show();
	$("#complete").show();
})

$("#optionOne").click(function(){
	$(".zebraImgContainer").css("background","pink");
})

$("#optionTwo").click(function(){
	$(".zebraImgContainer").css("background","blue");
})


$("#optionThree").click(function(){
	$(".zebraImgContainer").css("background","purple");
})

$("#optionFour").click(function(){
	$(".zebraImgContainer").css("background","orange");

})


$("#a1").click(function(){
	$(".og").hide();
	$(".zebraImgContainer img").attr("src","images/hippo.jpg");
	$(".zebraImg").show();

})

$("#a2").click(function(){
	$(".og").hide();
	$(".zebraImgContainer img").attr("src","images/otter.jpg");
	$(".zebraImg").show();
})

$("#a3").click(function(){
	$(".og").hide();
	$(".zebraImgContainer img").attr("src","images/dog.jpg");
	$(".zebraImg").show();
})




// move to next image edit option

$("#swapFilters").click(function(){
	$("#animalOptions").hide();
	$("#imageFilters").show();

})

$("#swapBorder").click(function(){
	$("#imageFilters").hide();
	$("#imageBorder").show();

})

// go back to previous image option

$("#backAnimal").click(function(){
	$("#imageFilters").hide();
	$("#animalOptions").show();
})

$("#backFilter").click(function(){
	$("#imageBorder").hide();
	$("#imageFilters").show();
})

$("#complete").click(function(){
	let newImage = $(".newImg img");
	newImage = $(".zebraImgContainer img");

	$(".newImg").show()
})










