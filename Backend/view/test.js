let tableau = camera;

for (i = 0; i < camera.length; i++){
console.log(camera[i].name);
console.log(camera[i].description);

// creation element carte 
var section = document.getElementById('carte-test');
var divContainerCard = document.getElementById('divContainer');
var divRow = document.getElementById('divRow');
var divCol = document.createElement('div');
divCol.className = 'col-12 col-md-4 my-2';

// card
var divCard = document.createElement('div');
divCard.className = 'card card-cascade card-ecommerce border-black shadow';

//card image
var divCardImg = document.createElement('div');
divCardImg.className = 'view view-cascade overlay';
var image = document.createElement('img');
image.className = 'card-img-top'
var a = document.createElement('a');
var divMask = document.createElement('div');
divMask.className = 'mask rgba-white-slight';

//card content
var divCardContent = document.createElement('div');
divCardContent.className = 'card-body card-body-cascade text-center';
var carteTitle = document.createElement('h4');
carteTitle.className = 'card-title';
var paragraphe = document.createElement('p');
paragraphe.className = 'card-text';

//card footer
var divFooter = document.createElement('div');
divFooter.className = 'card-footer px-1';
var spanFooter = document.createElement('span');
spanFooter.className = 'float-letf float-weight-bold';
var price = document.createElement('strong');

// init appendChild Card
divRow.appendChild(divCol);


divCol.appendChild(divCard);
divCard.appendChild(divCardImg);
divCardImg.appendChild(image);
image.appendChild(a);
a.appendChild(divMask);

divCardImg.appendChild(divCardContent);
divCardContent.appendChild(carteTitle);
divCardContent.appendChild(paragraphe);

divCard.appendChild(divFooter);
divFooter.appendChild(spanFooter);
spanFooter.appendChild(price);


image.src = camera[i].imageUrl;
carteTitle.textContent = camera[i].name;
paragraphe.textContent = camera[i].description;
price.textContent = camera[i].price+'$';

}