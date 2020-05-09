
//============================LESSON 1=========================
const test = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve('sayhello')
    },5000)
})

test.then(function(val) {
    console.log(val);
    
})



 async function chek() {
    const a = await test;
    console.log(a);
    
}
chek()

//=================================LESSON 2=========================
let random = () => Math.floor(Math.random()*20);
let x = random();

if (x < 0) {
    console.log('Failed: the number is smaller than 0');
    } else if (x > 10) {
    console.log('Failed: the number is bigger than 10');
    } else {
    console.log('‘Passed, bravo’');
    }
    

//============================ LESSON 3 ==============================

let random2 = (a,b) => Math.floor(Math.random()*(b-a)) + a;
let y = random2(4,16)
if (y < 4) {
    console.log('Failed: the number is smaller than 4');
    } else if (y > 16) {
    console.log('Failed: the number is bigger than 16');
    } else {
    console.log('Passed, bravo');
    }
    

//=========================== LESSON 4 ================================

let calculate = (x1,y1,x2,y2) => Math.sqrt((x1-x2)**2 + (y1 - y2)**2);

const z = calculate(3, 10, 0, 6);
console.log(z);

if (z !== 5) {
console.log('‘Failed: the calculation is wrong’');
} else {
console.log('‘Passed, bravo’');
}




//==============================LESSON 7===============================

async function fetchData() {
    const quoteData = await fetch('http://quotes.rest/qod.json')
    const realData = quoteData.json();
    return realData
}

async function render() {
    const data = await fetchData();
    const quoteData = data.contents.quotes[0].quote;
    const authorData = data.contents.quotes[0].author;
    let quote = document.getElementById('quote')
    let author = document.getElementById('author')
    quote.innerText = quoteData;
    author.innerText = authorData;
    
}
render()

//================================================





