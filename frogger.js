// REMEMBER YOUR PROJECT FOLDER HAS MOVED AND IS ON THE DESKTOP! NOT IN THE lthur LOCATION "C:\Users\lthur\OneDrive\Desktop\FroggerProject"

// this will let me access all the cells which are the child of the game-grid class
const cells = document.querySelectorAll('.game-grid div')
let cellPosition = 387
// I'm trying to create an array that includes the top row, bottom row and the left and right column. 
// I will then refer to this array and use it as a barrier so the froggy cannot cross
// the logs and cars will need to not pass either
// let wall = cellPosition, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 39, 40, 59, 60, 79, 80, 99, 100, 119, 120, 139, 140, 159, 160, 179, 180, 199, 200, 219, 220, 239, 240, 259, 260, 279, 280, 299, 300, 319, 320, 339, 340, 359, 360, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399]

// checking the cells exist!
console.log(cells)
// this lets me put the froggy wherever I want


function moveFroggy(e) {

    // i am passing the event from the moveFroggy function through the 
    // switch statment which makes the statements below run when they have
    // a matching value (in this case when the wasd keys are pushed)
    cells[cellPosition].classList.remove('froggy')
    switch (e.key) {
        case 'w':
            console.log('move up')
            cellPosition -= 20
                        
            break
        case 'a':
            console.log('move left')
            cellPosition -= 1
            
            break
        case 's':
            console.log('move down')
            cellPosition += 20
            
            break
        case 'd':
            console.log('move right')
            cellPosition += 1
            // if (cellPosition > width) 
            // break
    }

    // this is accessing the cells array and adding the froggy element to the the starting position
    cells[cellPosition].classList.add('froggy')


}

document.addEventListener('keyup', moveFroggy)

// function moveLogLeft () {

// }

// document.addEventListener('keyup', moveLogLeft)



