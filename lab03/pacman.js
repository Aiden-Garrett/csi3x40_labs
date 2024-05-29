let board;
let pacman;
let ghost;
let fruit;

function createGame(m) {
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
}

createGame(10)
console.log(board)