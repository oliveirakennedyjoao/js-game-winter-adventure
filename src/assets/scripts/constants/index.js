import Frame from "../types/Frame.js";

export const PLAYER_STATE = {
    WALKING: 'walk',
    IDLE: 'idle'
}

export const PLAYER_ANIMATIONS = {
    idle: {
        numberOfFrames: 1, 
        frames: [
            new Frame(45, 138, 46, 78, 500, 500, 46, 78)
        ]
    },
    walk: { 
        numberOfFrames: 6, 
        frames: [
            new Frame(45, 138, 46, 78, 500, 500, 46, 78),
            new Frame(120, 138, 46, 78, 550, 500, 46, 78),
            new Frame(195, 138, 46, 78, 600, 500, 46, 78),
            new Frame(267, 138, 46, 78, 650, 500, 46, 78),
            new Frame(341, 138, 46, 78, 700, 500, 46, 78),
            new Frame(415, 138, 46, 78, 750, 500, 46, 78)
        ]
    }
}