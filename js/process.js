





(function () {

 function recieveObject(obj){
 	for (var i = 1; i < obj.productList.length; i++) {


				var col=document.createElement('div');
				col.className='col s4';
				var product=document.createElement('div');
				product.className='product';

					var hover=document.createElement('div');
					hover.className='hover';
					hover.innerHTML=obj.productList[i].title;

				var discount=document.createElement('div');
				discount.className='discount';
				discount.innerHTML=obj.productList[i].discount+"% off";

				var image=document.createElement('div');
				image.className='img';

				var img=document.createElement('img');
				img.src = obj.productList[i].imageUrl;

				image.appendChild(img);



				var info=document.createElement('div');
				info.className='info';


				var bold=document.createElement('span');
				bold.className='bold'
				bold.innerHTML="Price: "+obj.productList[i].salePrice+"<br>";

				var hig=document.createElement('span');
				hig.className='bold hig'
				hig.innerHTML="Offer Price: "+obj.productList[i].offerPrice;


				var add=document.createElement('a');
				add.className='waves-effect waves-light btn add id ';
				add.href=obj.productList[i].productUrl;
				add.innerHTML='add to cart';
				//console.log(html);
				var doc=document.querySelector('.insert');



				
				doc.appendChild(col);
				col.appendChild(product);
				product.appendChild(hover);
				product.appendChild(discount);
				//discount value
				product.appendChild(image);
				col.appendChild(info);
				info.appendChild(bold);
				info.appendChild(hig);
				col.appendChild(add);


	




 	};

  }

function loadDoc(jsonlink) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		 obj = JSON.parse(xhttp.responseText);
		 var doc=document.querySelector('.insert');
		 doc.innerHTML='';
	o=obj;
	recieveObject(o);
	


		}

  }
  xhttp.open("GET", jsonlink, true);
  xhttp.send();

}

 var a=loadDoc('http://dev.shopalyst.com/shopalyst-service/hackerearth002/1.0/products?limit=10');









})(); 




//Simple declaration with default parameters
var widget = new AutoComplete('search_bar', ['Zovi','Flipkart','Amazon', 'Ebay', 'Myntra']);;

//Call with custom parameters
AutoComplete({
    paramName: "query",
    method:    "POST",
    noResult:  "No item like this",
});


