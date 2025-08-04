let bagItems;
onload();

function onload()
{
let bagItemStr = localStorage.getItem('bagItems');
bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
displayItemOnHomepage();
disPlayBagItem();
}
function AddToBag(itemId)
{
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    disPlayBagItem();
}

function disPlayBagItem()
 {
let bagCount=document.querySelector('.bag-item-count');
if(bagItems.length > 0)
{
    bagCount.innerText=bagItems.length;
    bagCount.style.visibility ='visible';
}
else{
    bagCount.style.visibility ='hidden';
}
 }

function displayItemOnHomepage()
{
let itemContainerElement = document.querySelector('.items_container');
if(itemContainerElement===null)
{
    return;
}

    let innerHtml="";
items.forEach((item) => {
    innerHtml =innerHtml+ `
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image" />
            <div class="rating">${item.rating.stars}⭐ | ${item.rating.count} reviews</div>
            <div class="company-name">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">₹${item.current_price}</span>
                <span class="original-price">₹${item.original_price}</span>
                <span class="discount">${item.discount_percentage}% off</span>
            </div>
            <button class="btn-add-bag" onclick="AddToBag(${item.id})" >ADD TO BAG</button>
        </div>`;
});
return itemContainerElement.innerHTML = innerHtml;
}


 


