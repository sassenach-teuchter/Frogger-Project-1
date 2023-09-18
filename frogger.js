// this will let me access all the cells which are the child of the game-grid class
const cells = document.querySelectorAll('.game-grid div')
let startingPosition = 391

// checking the cells exist!
console.log(cells)
// this lets me put the froggy wherever I want


function moveFroggy(e) {
    
    // i am passing the event from the moveFroggy function through the 
    // switch statment which makes the statements below run when they have
    // a matching value (in this case when the wasd keys are pushed)
    cells[startingPosition].classList.remove('froggy')
    switch (e.key) {
        case 'w':
            console.log('move up')
            startingPosition -= 20
            break
        case 'a':
            console.log('move left')
            startingPosition -= 1
            break
        case 's':
            console.log('move down')
            startingPosition += 20
            break
        case 'd':
            console.log('move right')
            startingPosition += 1
            break
            
    }

    // this is accessing the cells array and adding the froggy element to the the starting position
    cells[startingPosition].classList.add('froggy')
    

}

document.addEventListener('keyup', moveFroggy)



