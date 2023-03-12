let globalState = {
    items : [{
        name : "Item 1",
        location : "Zuhause"
    }],
    locations : []
}

function createItemDivs(items){

    const container = document.getElementById('items-container');
    
    for(let i = 0; i < items.length; i++){
        let div = document.createElement('div');
        div.classList.add('item-element');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        p.textContent = items[i].location
        h1.classList.add('item-element_header');
        h1.textContent = items[i].name;

        div.appendChild(h1);
        div.appendChild(p);
        container.appendChild(div);
    }
}

function createItem(){
    const itemNumber = globalState.items.length + 1
    const item = {
        name : "Item " + itemNumber,
        location : "JWD"
    }

    globalState.items.push(item);
}