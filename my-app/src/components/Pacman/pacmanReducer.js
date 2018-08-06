const initialState = {
    position: [0, 200],
    direction: "NORTH",
};

const pacmanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PACMAN':
            return {
                ...action.payload
            };
        case 'CHANGE_DIRECTION':
            return {
                ...action.payload
            };
        case 'REPORT':
            return {
                ...action.payload
            };
        default:
            return state
    }
};

export default pacmanReducer