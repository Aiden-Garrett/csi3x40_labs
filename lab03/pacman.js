var ghost;
function createGame(m) {
    var board;
    let pacman;
    // var ghost;
    let fruit;

    board = new Array(m);
    pacman = Math.floor(Math.random() * m);

    do {
        ghost = Math.floor(Math.random() * m);
    } while (ghost === pacman);

    do {
        fruit = Math.floor(Math.random() * m);
    } while (fruit === pacman || fruit === ghost);

    for (let i = 0; i < m; i++) {
        if (i === pacman) {
            board[i] = "C";
        } else if (i === ghost) {
            board[i] = "^.";
        } else if (i === fruit) {
            board[i] = "@";
        } else {
            board[i] = ".";
        }
    }

    return board;
}


function moveLeft(game) {
    // i = 1 since cannot move i=0 to the left
    for (let i = 1; i < game.length; i++) {
        if (game[i] === "C") {
            game[i - 1] = "C";
            game[i] = "";
            break;
        }
    }

    if (isComplete(game)) {
        for (let i = 0; i < game.length; i++) {
            game[i] += ".";
        }
    }
    return game;
}

function moveRight(game) {
    for (let i = 0; i < game.length - 1; i++) {
        if (game[i] === "C") {
            game[i + 1] = "C";
            game[i] = "";
            break;
        }
    }

    if (isComplete(game)) {
        for (let i = 0; i < game.length; i++) {
            game[i] += ".";
        }
    }
    return game;
}

function isComplete(board){
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes(".")) {
            return false
        }
    }
    return true;
}

function moveGhost(game){
    let dir = Math.random()

    game[ghost] = ".";

    if (dir < 0.5) {
        dir = 1;
        if (ghost+dir === game.length) {
            ghost = 0;
        } else {
            ghost += dir;
        }

    } else {
        dir = -1
        if (ghost+dir=== -1) {
            ghost = game.length-1;
        } else {
            ghost += dir;
        }
    }

    game[ghost] = "^.";
    return console.log(game);
}


console.log(createGame(10))
console.log(moveLeft([ ".", ".", ".", ".", "C", ".", ".", "@", ".", "^." ]))
console.log(moveRight([ ".", ".", ".", ".", "C", ".", ".", "@", ".", "^." ]))
console.log(isComplete([ "", "", "", "", "C", "", "", "@", "", "^" ]))
console.log(moveLeft([ "", "", "", "", "C", "", "", "@", "", "^" ]))


function startGame() {
    board = createGame(10);
    setTimeout(() => {
        setInterval(()=> {
            moveGhost(board)
        }, 1000);
    }, 1000);
}
startGame();
