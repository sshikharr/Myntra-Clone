let bagItems;
onLoad();
function onLoad(){
    let bagItemStr=localStorage.getItem('bagItem');
    bagItems=bagItemStr? JSON.parse(bagItemStr):[];
    displayBagIcon();
    displayOnHome();
}

function AddToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon(){
    let Count=document.querySelector('.count');
    if(bagItems.length>0){
        Count.style.visibility='visible';
        Count.innerHTML=bagItems.length;
    }else{
        Count.style.visibility='hidden';
    }   
}


function displayOnHome(){
    let itemsElement=document.querySelector('.itemsContainer');
    if(itemsElement===null){
        return;
    }
    let innerHtml='';
    items.forEach(item => {
    innerHtml+=`<div class="itemContainer">
    <img class="productImage" src="${item.image}" alt="Product Image">
    <div class="reviews">
    ${item.rating.stars}⭐ | ${item.rating.count}
    </div>
    <div class="brandNmae">
    ${item.company}
    </div>
    <div class="itemName">
    ${item.item_name}
    </div>
    <div class="cost">
    <span class="currentPrice">Rs.${item.current_price}</span>
    <span class="originalPrice">Rs.${item.original_price}5</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="AddToBagBtn" onclick="AddToBag(${item.id})">Add To Bag</button>
</div>`
});
itemsElement.innerHTML=innerHtml;
}
