// Selectors
var character = document.getElementById('character');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var game = document.getElementById('game')
var startBtn = document.getElementById('btn')
// Eventlisteners
game.addEventListener('click', mouseJump);
addEventListener('keydown', jumpOnArrow);
setInterval(checkLose, 10);
startBtn.addEventListener('click', start);
// Function
// Start game on button press (timeout need to dont jump when u clik on start)
function start(e) {
    setTimeout(() =>{block.classList.add('start')}, 10);
    startBtn.style.display = 'none'
}
// Jump on mouse click
function mouseJump() {
    if (block.classList[0] === 'start'){
    character.classList.add('animatejump');
    character.addEventListener('animationend', () => {
        character.classList.remove('animatejump')
    })}
}
// Jump with arrows or AWDS
function jumpOnArrow(e) {
    const key = e.key
    switch (key) {
        // Jump on W or ArrowUp
        case 'ArrowUp':
            character.classList.add('animatejump');
            character.addEventListener('animationend', () => {
                character.classList.remove('animatejump')
            })
            break;
        case 'w':
            character.classList.add('animatejump');
            character.addEventListener('animationend', () => {
                character.classList.remove('animatejump')
            })
            break;
        case 'ArrowDown':
            character.classList.add('animateduck');
            character.addEventListener('animationend', () => {
                character.classList.remove('animateduck')
            })
            break;
        case 's':
            character.classList.add('animateduck');
            character.addEventListener('animationend', () => {
                character.classList.remove('animateduck')
            })
            break;
    }
}
function checkLose(e) {
    var characterPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockPosition >= 0 && blockPosition <= 45 && characterPosition >= 330) {
        block.style.display = 'none'


    } 
}
