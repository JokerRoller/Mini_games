// Selectors
var game = document.getElementById('game');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
// Event listeners

// Functions
// Randomize block spawn number
function randomizerBlock() {
    var blockNumber = Math.floor(Math.random()*3 + 1);
    blockNumber1 = blockNumber;
};
// Randomize position of block spawn
var blockPosition1 =  1;
function randomizerPosition() {
    blockPosition = Math.floor(Math.random()*200 + 100);
    blockPosition1 = 1000 + blockPosition;
}
// Create number of blocks using randomize()
function createBlock(e) {
    switch (e) {
        case 1:
            block1.style.left = '1000px'
            break;
        case 2:
            randomizerPosition();
            block1.style.left = '1000px'
            block2.style.left = `${blockPosition1}px`
            break;
    }
}
createBlock(2)


