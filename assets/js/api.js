let itemID = prompt("Insert ID")

let itemData = {}
function showData (){
    console.log(itemData['ID'],['IconHD'],['Name'],['Description_en'])    
}

function drawCard(){
    document.getElementById('description').innerHTML=itemData['Description_en'];
    document.getElementById('item').innerHTML=itemData['Name'];
    let itemIcon = document.getElementById('iconImg')
    itemIcon.src='https://xivapi.com' + itemData['IconHD'];
    let universalis = document.getElementById('market')
    universalis.href='https://universalis.app/market/' + itemID;
}

fetch(`https://xivapi.com/Item/${itemID}`)
    .then(response => response.json())
    .then(data => {
        itemData = data
        showData()
        drawCard()
    } 
   ) 

let hello = console.log('hello')