$(document).ready(function(){

	    shirts_call();
	    
	  
});

// run ajax request Shirts
function shirts_call(){

    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/shirts",
        type: "GET",
        dataType: "jsonp",
           
        success: function (data) {
            
            
            var insertData ='';
            var len =data.shirts.length;
            // console.log(len);

            for (var i=0; i<len; i++ ){
                
            	 var img = data.shirts[i].image;
            	 var NameItem = data.shirts[i].name;
            	 var prc = data.shirts[i].price;
                 var frm ='Quantity: <input type="number" name="quantity" min="1" max="99"><button class="BuyNow" type="submit">Add to Cart</button></div>'

            	insertData += '<div class="dummy-grid__item"><img src="' + img + '">';
            	insertData += '<div class="NameProd">'+ NameItem +'</div>';
            	insertData += '<div class="PriceProd">'+ '$ ' + prc + '</div>';
                insertData += frm; +'</div>'

                //I have to removed <form> is causing problems

                 $('.dummy-grid').html(insertData);

            	
				$('.dummy-grid__item').on('click','.BuyNow', function(){
			    var myIndex = $(this).index('.BuyNow');                
			    var addName = $('.NameProd')[myIndex];

                console.log(addName);
			    // var addQuantity = $(this).find(input).val();
			    // console.log(addName);
       //          $('.checkOutName').html(addName);
			    // console.log(addQuantity);
			    });

            }
         
        
    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});

}



//Click Shirts
$('.selectShirt').click(function(){
		shirts_call();
});

//Click Pants
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


//Click Shoes
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






$(".checkout__button").click(function(){

	$(".checkout").addClass("checkout--active");
});

$(".checkout__cancel").click(function(){

	$(".checkout").removeClass("checkout--active");
});