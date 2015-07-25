$(document).ready(function(){
    items_call('shirts');
    //Click Shirts
    $('.selectShirt').click(function(){
            if(_clothing.shirts.length > 0){
                draw_items(_clothing.shirts,'shirts');
            }
            else{
              items_call('shirts');
            }
    });
    $('.selectPants').click(function(){
           if(_clothing.pants.length > 0){
                draw_items(_clothing.pants,'pants');
            }
            else{
              items_call('pants');
            }
    });
    $('.selectShoes').click(function(){
            if(_clothing.shoes.length > 0){
                draw_items(_clothing.shoes,'shoes');
            }
            else{
              items_call('shoes');
            }
    });

    $(".checkout__button").click(function(){

        $(".checkout").addClass("checkout--active");
    });

    $(".checkout__cancel").click(function(){

        $(".checkout").removeClass("checkout--active");
    }); 

    $('.purchase').click(purchase);
});

var _clothing = {
    'shirts':[],
    'pants':[],
    'shoes':[]
}

var _checkout = {
    'items':[],
    'total':0.00,
};

var total = 0.00;

function draw_items(object,key){
    var insertData,frm,img,NameItem,prc;
    $('.dummy-grid').html('');
    for (var i=0; i<object.length; i++ ){
        img = object[i].image;
        NameItem = object[i].name;
        prc = object[i].price;
        frm ='<form class="add-to-checkout" action="">Quantity:';
        frm+='<input type="hidden" name="key" value="'+key+'">';
        frm+='<input type="hidden" name="index" value="'+i+'">';
        frm+=' <input type="number" name="quantity" min="1" max="99" value="1">';
        frm+='<button class="BuyNow" type="submit">Add to Cart</button></form>';

        insertData = '<div class="dummy-grid__item"><img src="' + img + '">';
        insertData += '<div class="NameProd">'+ NameItem +'</div>';
        insertData += '<div class="PriceProd">'+ '$ ' + prc + '</div>';
        insertData += frm +'</div>';
      

        $('.dummy-grid').append(insertData);
    }

    $('.add-to-checkout').submit(function(event){
        event.preventDefault();
        var frm = $(this);
        add_to_checkout(frm);
    });
}

function add_to_checkout(frm){
    var key = frm.find('input[name="key"]').val();
    var index = frm.find('input[name="index"]').val();
    var quantity = frm.find('input[name="quantity"]').val();
    var item = {
        'name':_clothing[key][index].name,
        'price':_clothing[key][index].price,
        'quantity':quantity
    }

    total = (parseFloat(_clothing[key][index].price) * quantity) + total;
    _checkout.items.push(item);
    _checkout.total = total;
    draw_to_checkout(_clothing[key][index],quantity);

    console.log(_checkout);
}

function draw_to_checkout(object,quantity){
    var html = '<tr><td class="checkOutName">'+object.name+' ('+quantity+' Items)</td><td>$'+object.price+' <i class="fa fa-trash"></i></td></tr>';
    $('#checkout-list').append(html);
    $('#checkout__total').html('$'+total.toFixed(2));
}
// run ajax request Shirts
function items_call(key){

    $.ajax({
    	url: "http://174.129.248.23/brainstation/shop/"+key,
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            _clothing[key] = data[key];
            draw_items(data[key],key);
    	},
    	error:function(){
            $('dummy-grid__item').html("There was an error communicating with the server");
            } 
	});

}

function purchase(){
    $.ajax({
        url:'http://174.129.248.23/brainstation/shop/purchase',
        data:{'items':JSON.stringify(_checkout.items),'total':_checkout.total},
        method:'POST',
        dataType:'jsonp',
        success:function(data){console.log(data)},
        error:function(data){console.log(data)}
    })
}





