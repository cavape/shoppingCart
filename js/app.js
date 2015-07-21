$(document).ready(function(){

	    // run ajax request
    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/shirts",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            console.log(data);
            
            var insertImage =" ";
            for (var i=0; i<data.shirts.length; i++ ){
            	 var img = data.shirts[i].image;
            	 var NameItem = data.shirts[i].name;
            	 var prc = data.shirts[i].price;
            	insertImage += '<div class="dummy-grid__item"><img src="' + img + '">';
            	insertImage += '<div class="NameProd">'+ NameItem +'</div>';
            	insertImage += '<div class="PriceProd">'+ '$ ' + prc + '</div></div>'
            	 $('.dummy-grid').html(insertImage);
            }

            // var insertName =" ";
            // for (var j=0; j<data.shirts.length; j++ ){
            // 	 var prc = data.shirts[i].price
            // 	insertName += '<p>' + prc + '</p>';
            // 	 $('.NameItem').html(insertName);
            // }
           
            // $('.dummy-grid__item').html('<img src="' + img + '">');

            // var img = data.shirts[0].image
            // $('.dummy-grid__item').html('<img src="' + img + '">');
        
    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});

	
});
/////Click Pants
$('.selectShirt').click(function(){
	 $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/shirts",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            console.log(data);
            
            var insertImage =" ";
            for (var i=0; i<data.shirts.length; i++ ){
            	 var img = data.shirts[i].image;
            	 var NameItem = data.shirts[i].name;
            	 var prc = data.shirts[i].price;
            	insertImage += '<div class="dummy-grid__item"><img src="' + img + '">';
            	insertImage += '<div class="NameProd">'+ NameItem +'</div>';
            	insertImage += '<div class="PriceProd">'+ '$ ' + prc + '</div></div>'
            	 $('.dummy-grid').html(insertImage);
            }
            
    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});

});

/////Click Pants
$('.selectPants').click(function(){

	    // run ajax request
    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/pants",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            console.log(data);
            
            var insertImage =" ";
            for (var i=0; i<data.pants.length; i++ ){
            	 var img = data.pants[i].image;
            	 var NameItem = data.pants[i].name;
            	 var prc = data.pants[i].price;
            	insertImage += '<div class="dummy-grid__item"><img src="' + img + '">';
            	insertImage += '<div class="NameProd">'+ NameItem +'</div>';
            	insertImage += '<div class="PriceProd">'+ '$ ' + prc + '</div></div>'
            	 $('.dummy-grid').html(insertImage);
            }

    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});
});
///////

/////Click Shoes
$('.selectShoes').click(function(){

	    // run ajax request
    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/shoes",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            console.log(data);
            
            var insertImage =" ";
            for (var i=0; i<data.shoes.length; i++ ){
            	 var img = data.shoes[i].image;
            	 var NameItem = data.shoes[i].name;
            	 var prc = data.shoes[i].price;
            	insertImage += '<div class="dummy-grid__item"><img src="' + img + '">';
            	insertImage += '<div class="NameProd">'+ NameItem +'</div>';
            	insertImage += '<div class="PriceProd">'+ '$ ' + prc + '</div></div>'
            	 $('.dummy-grid').html(insertImage);
            }

    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});
});
///////





$(".checkout__button").click(function(){

	$(".checkout").addClass("checkout--active");
});

$(".checkout__cancel").click(function(){

	$(".checkout").removeClass("checkout--active");
});