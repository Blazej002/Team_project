
let numb = 0;
function empty() {
    numb++
}
function full() {
    numb--;
}

function add_pics(id, new_id, items) {
    if (numb == 0) {
        console.log(numb)
        empty()
        console.log(numb)
        console.log('Still the same')

        document.getElementById(id).innerHTML = /*HTML*/ `
            <img src="/img/${items}.jpg"> 
            `;
        document.getElementById(new_id).innerHTML = /*HTML*/ `
        `;
    } else {
        full()
        console.log(numb)
        console.log('success')
        document.getElementById(new_id).innerHTML = /*HTML*/ `
        <img src="/img/${items}.jpg">
        `;
        document.getElementById(id).innerHTML = /*HTML*/ `
        
        `
    }
}



function open_inv(pic) {
    document.getElementById('insideInv').innerHTML = /*HTML*/ `
    <div id="box1" class="inv_boxer" onclick="add_pics('box1', 'loot1', 'bread')"><img src="${pic}"></div>
    <div id="box2" class="inv_boxer" onclick="add_pics('box2', 'loot2', 'bread')">Empty</div>
    <div id="box3" class="inv_boxer" onclick="add_pics('box3', 'loot3', 'bread')">Empty</div>
    <div id="box4" class="inv_boxer" onclick="add_pics('box4', 'loot4', 'bread')">Empty</div>
    <div id="box5" class="inv_boxer" onclick="add_pics('box5', 'loot5', 'bread')">Empty</div>
    <div id="box6" class="inv_boxer" onclick="add_pics('box6', 'loot6', 'bread')">Empty</div>
    `
}

function close_inv() {
    document.getElementById('insideInv').innerHTML = /*HTML*/ ``
}