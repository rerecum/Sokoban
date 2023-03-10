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

