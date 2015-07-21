$(document).ready(function(){

	    // run ajax request
    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/shirts",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            console.log(data);
            var img = data.shirts[0].image
            $('.dummy-grid__item').html('<img src="' + img + '">');
        
    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});
});



$(".checkout__button").click(function(){

	$(".checkout").addClass("checkout--active");
});

$(".checkout__cancel").click(function(){

	$(".checkout").removeClass("checkout--active");
});