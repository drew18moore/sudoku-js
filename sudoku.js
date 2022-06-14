var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    [0, 0, 7, 4, 9, 1, 6, 0, 5],
    [0, 0, 0, 0, 6, 0, 3, 0, 9],
    [0, 0, 0, 0, 0, 7, 0, 1, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 4],
    [0, 0, 3, 0, 0, 0, 0, 9, 0],
    [0, 0, 6, 2, 0, 0, 1, 8, 7],
    [9, 0, 4, 0, 7, 0, 0, 0, 2],
    [6, 7, 0, 8, 3, 0, 0, 0, 0],
    [8, 1, 0, 0, 4, 5, 0, 0, 0]
]

var solution = [
    [3, 8, 7, 4, 9, 1, 6, 2, 5],
    [2, 4, 1, 5, 6, 8, 3, 7, 9],
    [5, 6, 9, 3, 2, 7, 4, 1, 8],
    [7, 5, 8, 6, 1, 9, 2, 3, 4],
    [1, 2, 3, 7, 8, 4, 5, 9, 6],
    [4, 9, 6, 2, 5, 3, 1, 8, 7],
    [9, 3, 4, 1, 7, 6, 8, 5, 2],
    [6, 7, 5, 8, 3, 2, 9, 4, 1],
    [8, 1, 2, 9, 4, 5, 7, 6, 3]
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile  = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != 0) {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start")
            }
            if (r == 2 || r == 5)
                tile.classList.add("horizontal-line");
            if (c == 2 || c == 5)
                tile.classList.add("vertical-line");
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }

    if (numSelected != null && numSelected.id == this.id) {
        numSelected.classList.remove("number-selected");
        numSelected = null;
        return;
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "")
            return;
        r = parseInt(this.id.split("-")[0]);
        c = parseInt(this.id.split("-")[1]);
        if (solution[r][c] == numSelected.id) {
            console.log("CORRECT!!! (GUESS", numSelected.id, ", SOLUTION", solution[r][c] + ")");
            this.innerText = numSelected.id;
            board[r][c] = numSelected.id;
            if (board.toString() === solution.toString()) {
                console.log("YOU WIN!!!");
                document.querySelectorAll(".tile").forEach(x => {
                    x.classList.remove("tile-start")
                    x.classList.add("tile-win");
                });
            }
        } else {
            console.log("INCORRECT!!! (GUESS", numSelected.id, ", SOLUTION", solution[r][c] + ")");
            return;
        }
    }
}