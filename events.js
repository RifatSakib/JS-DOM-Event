console.log("this is separate JS")
//option 1:directly inline style in html element

//  <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// option 2: add onclick function on the html element [we will use this]
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 3:
const makeButtonBlue = document.getElementById("blue");

makeButtonBlue.onclick = makeBlue; // not makeBlue()

function makeBlue() {

    document.body.style.backgroundColor = "blue";
}


//option 3 another:
const makeButtonPurple = document.getElementById("purple");

makeButtonPurple.onclick = function makePurple() {

    document.body.style.backgroundColor = "purple";
}

// options 4:
const pinkButton = document.getElementById('pink') 
pinkButton.addEventListener('click',makePink);
    
function makePink(){
    document.body.style.backgroundColor = 'pink';
}


//option 4 another

const greenButton = document.getElementById('green') 
greenButton.addEventListener('click',function makePink(){
    document.body.style.backgroundColor = 'green';
});
    

//option 4 final [ we will use this]

// document.getElementById('golden').addEventListener('click',function(){});


document.getElementById('golden').addEventListener('click',function(){
    document.body.style.backgroundColor = 'gold';
});