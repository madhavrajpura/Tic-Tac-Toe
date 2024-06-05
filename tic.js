let playertext = document.getElementById('playertext');
let restartbtn = document.getElementById('restartbtn');
let boxes = Array.from(document.getElementsByClassName('box'));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winner')

const O_TEXT = "O"
const X_TEXT = "X"
let currentplayer = X_TEXT
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click',boxClicked))

}


// BOX CLICK FUNCTION
function boxClicked(e){
    const id = e.target.id

    if(spaces[id] == null){
        spaces[id] = currentplayer;
        e.target.innerText = currentplayer;

        if(playerHasWon() !== false){
            
            let winningBlocks = playerHasWon();
            
            winningBlocks.map(box => boxes[box].style.backgroundColor = winnerIndicator )
            playertext.innerText = `${currentplayer} has Won !!!`;
            boxes.innerText = ''
            return
        }

        // if currentPlayer = X than change it to O else change it to O 
        currentplayer = currentplayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}
// .


// To SEE WHICH PLAYER HAS WON THE GAME
const winningCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon(){
    for (const condition of winningCombos) {
        let [a,b,c] = condition;

        // checking that first is X then second is also X and than is also X.
        if(spaces[a] && (spaces[a] == spaces[b]) && spaces[a] == spaces[c]){
            return [a,b,c];
           
        }
    }
    return false;
}


// RESTART FUNCTION 
restartbtn.addEventListener('click',restart)

function restart(){
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
        playertext.innerText = 'Let\'s Play...'
    })

    playertext = 'Tic Tac Toe' 

    currentplayer = X_TEXT;
}
// .

startGame()

