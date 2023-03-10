import React, {useEffect, useReducer} from "react"

// Creating levels
const LEVELS = [ // 0 = playground, 1 = wall, 2 = box (playground bellow), 4 = storage, 5 = player, (playground bellow) 8 = outside world
    [ // level one
        [8,8,8,8,1,1,1,1,1,8,8,8,8,8,8,8,8,8,8],
        [8,8,8,8,1,0,0,0,1,8,8,8,8,8,8,8,8,8,8],
        [8,8,8,8,1,2,0,0,1,8,8,8,8,8,8,8,8,8,8],
        [8,8,1,1,1,0,0,2,1,1,8,8,8,8,8,8,8,8,8],
        [8,8,1,0,0,2,0,2,0,1,8,8,8,8,8,8,8,8,8],
        [1,1,1,0,1,0,1,1,0,1,8,8,8,1,1,1,1,1,1],
        [1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,4,4,1],
        [1,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,4,4,1],
        [1,1,1,1,1,0,1,1,1,0,1,5,1,1,0,0,4,4,1],
        [8,8,8,8,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
        [8,8,8,8,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8],
    ],
    [ // level two
        [1,1,1,1,1,1,1,1,1,1,1,1,8,8],
        [1,4,4,0,0,1,0,0,0,0,0,1,1,1],
        [1,4,4,0,0,1,0,2,0,0,2,0,0,1],
        [1,4,4,0,0,1,2,1,1,1,1,0,0,1],
        [1,4,4,0,0,0,0,5,0,1,1,0,0,1],
        [1,4,4,0,0,1,0,1,0,0,2,0,1,1],
        [1,1,1,1,1,1,0,1,1,2,0,2,0,1],
        [8,8,1,0,2,0,0,2,0,2,0,2,0,1],
        [8,8,1,0,0,0,0,1,0,0,0,0,0,1],
        [8,8,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
]

const color = ["#ddd", "#777", "brown", null, "orange", "#000", null, "green", "transparent"]
const ColorInPlace = 7 // index of green color from COLORS
const item = {
    Playground:0,
    Wall: 1,
    Box: 2,
    Storage: 4,
    Player: 5,
    World: 8 
}
const gamestate = {
    Running: "RUNNING",
    Done: "DONE"
}
const action = {
    move: "MOVE",
    RestartLevel: "RESTART_LEVEL",
    PlayNextLevel: "PLAY_NEXT_LEVEL"
}
const direction = {
    Left: 37,
    Right: 39,
    Up: 38,
    Down: 40
}

function getInitialState(levelNo) {
    const LEVEL = LEVELS[levelNo]

    let level = [], player = {x: null, y: null}, box = []
    // parse level and init objects
    for (let y=0; y<level.length; y++) {
        level[y] = []
        for (let x=0; x<level[y].length; x++) {
            if ( [item.Box, item.Player].includes(level[y][x]) )
            // cast Box, Player as Playground
            level[y][x] = item.Playground
        else // otherwise get type from the level map
            level[y][x] = LEVEL[y][x]
        if (LEVEL[y][x] === item.Box) box.push({x:x, y:y}) // fill the array of boxes
        if (LEVEL[y][x] === item.Player) player = {x:x, y:y} // inital player position
        }
    }
    return {
        levelNo: levelNo,
        status: gamestate.Running,
        level, player, box
    }
}

function GameReducer(state, action) {
    switch (action.type) {

        case ACTION.RestartLevel:
            return {...getInitialState(state.levelNo), status: gamestate.Running}

        case ACTION.PlayNextLevel:
            return {...getInitialState(state.levelNo+1), status: gamestate.Running}

        case ACTION.move:
            let d = {x: 0, y: 0} // d -> direction, b -> box
            console.log(action.keyCode)
            // Simple moves action
            if (direction.Left === action.keyCode)  d.x-- 
            if (direction.Right === action.keyCode) d.x++
            if (direction.Up === action.keyCode)    d.y--
            if (direction.Down === action.keyCode)  d.y++

            // Check walls
            if (state.level[state.player.y+d.y][state.player.x+d.x] === item.Wall) return {...state}

            // Check if player is trying to move the box
            if ([...state.box].find(b.x===state.player.x+d.x && b.y===state.player.y+d.y)) {
                // Check whether it is possible to move the box
                if (
                    // check free space behind box
                    [item.Playground, item.Storage].includes(state.level[state.player.y+2*d.y][state.player.x+2*d.x])
                    // check box-free space behind box
                    && ![...state.box].find(b => b.x === state.player.x+2*d.x && b.y === state.player.y+2*d.y) 
                ) { // return new position with moved box
                    let newState = {...state, player: {x: state.player.x+d.x, y: state.player.y+d.y}, box: [...state.box].map(b => {
                        // if player tries to move the box's position
                        if ( (b.x === state.player.x+d.x) && (b.y === state.player.y+d.y) )
                            return {x: b.x+d.x, y: b.y+d.y}
                        else
                            return b
                    } ) }
                }
            }
    }
}

//<================================>
export default function Sokoban() {

}