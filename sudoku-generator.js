export class SudokuGenerator {
    constructor(){
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    }

    generateRandomGrid(numbersProvided) {
        console.log("Generating Grid of", numbersProvided, "Elements");

        this.placeNumsInBoxs();

        return this.grid;
    }

    // runs placeNumsInBox 9 times to fill grid
    placeNumsInBoxs() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.placeNumsInBox(i,j);
            }
        }
    }

    // Places nums 1-9 in box of index (r,c)
    placeNumsInBox(r, c) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let numExists = [false, false, false, false, false, false, false, false, false];

        // shuffle nums
        for (let i = nums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        // place nums
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i+r*3][j+c*3] = nums[j+i*3];
            }
        }
        console.log(this.grid);
    }
}