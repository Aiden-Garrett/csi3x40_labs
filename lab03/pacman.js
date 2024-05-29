
function createGame(m) {
    let board;
    let pacman;
    let ghost;
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
            game[i - 1] = "C.";
            game[i] = "";
            return game;
        }
    }
    return game;
}

function moveRight(game) {
    for (let i = 0; i < game.length - 1; i++) {
        if (game[i] === "C") {
            game[i + 1] = "C.";
            game[i] = "";
            return game;
        }
    }
    return game;
}


console.log(createGame(10))
console.log(moveLeft([ ".", ".", ".", ".", "C", ".", ".", "@", ".", "^." ]))
console.log(moveRight([ ".", ".", ".", ".", "C", ".", ".", "@", ".", "^." ]))