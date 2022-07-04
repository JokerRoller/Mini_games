// Selectors + var
var game = document.getElementById('game');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var scoreP = document.querySelector('.score');
var level = 2.5;
var score = 0;
// Event listeners

// Functions
// Randomize block spawn number
var blockNumber1 = 1;
function randomizerBlock() {
    var blockNumber = Math.floor(Math.random()*3 + 1);
    blockNumber1 = blockNumber;
};
// Randomize position of block spawn
var blockPosition1 =  0;
function randomizerPosition() {
    blockPosition = Math.floor(Math.random()*500 + 200);
    blockPosition1 = blockPosition;
}
// test game start
var test3 = setInterval(test1, `${level*1000}`)
function test1 (){
    randomizerBlock();
    createBlock(1);
}
// Create number of blocks using randomize()
function createBlock(e) {
    switch (e) {
        case 1:
            block1.classList.add('start')
            block1.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block1.classList.remove('start');
                console.log('done')
            })
            break;
        case 2:
            randomizerPosition();
            block1.style.transition = `all ${level}s linear`
            block2.style.transition = `all ${level}s linear`
            block1.classList.add('start')
            block1.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block1.classList.remove('start');
            })
            setTimeout(() => {    block2.classList.add('start')
            block2.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block2.classList.remove('start');
            })}, blockPosition1)
            break;
        case 3:
            randomizerPosition();
            block1.style.transition = `all ${level}s linear`
            block2.style.transition = `all ${level}s linear`
            block3.style.transition = `all ${level}s linear`
            block1.classList.add('start')
            block1.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block1.classList.remove('start');
            })
            setTimeout(() => {    block2.classList.add('start')
            block2.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block2.classList.remove('start');
            })}, blockPosition1)
            let time = blockPosition1;
            randomizerPosition();
            setTimeout(() => {    block3.classList.add('start')
            block3.addEventListener('animationend', () => {
                score += 100; 
                scoreP.innerHTML = `${score}`;
                block3.classList.remove('start');
            })}, `${time + blockPosition1}`)
            break;
    }
}

