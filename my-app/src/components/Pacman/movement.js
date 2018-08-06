import store from '../config/store'
import {PACMAN_SIZE, MAP_HEIGHT, MAP_WIDTH} from '../config/constants'

export const getNewPosition = (oldPos, direction) => {
    switch (direction) {
        case 'WEST':
            return [oldPos[0] - PACMAN_SIZE, oldPos[1]];
        case 'EAST':
            return [oldPos[0] + PACMAN_SIZE, oldPos[1]];
        case 'NORTH':
            return [oldPos[0], oldPos[1] - PACMAN_SIZE];
        case 'SOUTH':
            return [oldPos[0], oldPos[1] + PACMAN_SIZE];
        default:
            console.log('No movement')
    }
};

export const observeBoundaries = (oldPos, newPos) => {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - PACMAN_SIZE) &&
        (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - PACMAN_SIZE)
};

export const attemptLeftMove = () => {
    const currentDirection = store.getState().pacman.direction;
    const currentPosition = store.getState().pacman.position;
    switch (currentDirection) {
        case 'WEST':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: currentPosition,
                    direction: 'SOUTH',
                }
            };
        case 'EAST':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: currentPosition,
                    direction: 'NORTH',
                }
            };
        case 'NORTH':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: currentPosition,
                    direction: 'WEST',
                }
            };
        case 'SOUTH':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: currentPosition,
                    direction: 'EAST',
                }
            };
        default:
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: currentPosition,
                    direction: currentDirection,
                }
            };
    }
};

export const attemptRightMove = () => {
    const direction = store.getState().pacman.direction;
    const position = store.getState().pacman.position;
    switch (direction) {
        case 'WEST':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: position,
                    direction: 'NORTH',
                }
            };
        case 'EAST':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: position,
                    direction: 'SOUTH',
                }
            };
        case 'NORTH':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: position,
                    direction: 'EAST',
                }
            };
        case 'SOUTH':
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: position,
                    direction: 'WEST',
                }
            };
        default:
            return {
                type: 'CHANGE_DIRECTION',
                payload: {
                    position: position,
                    direction: direction,
                }
            };
    }
};

export const generateReport = () => {
    alert(store.getState().pacman.position + ',' + store.getState().pacman.direction);
    return {
        type: 'REPORT',
        payload: {
            position: store.getState().pacman.position,
            direction: store.getState().pacman.direction
        }
    }
};

export const move = () => {
    const oldPos = store.getState().pacman.position;
    const direction = store.getState().pacman.direction;
    const newPos = getNewPosition(oldPos, direction);
    if (observeBoundaries(oldPos, newPos)) {
        return {
            type: 'MOVE_PACMAN',
            payload: {
                position: newPos,
                direction: direction
            }
        }
    }
    else{
        return {
            type: 'MOVE_PACMAN',
            payload: {
                position: oldPos,
                direction: direction
            }
        }
    }
};

export let handleKeyDown = (e) => {console.log('Calling');
    e.preventDefault();

    switch (e.keyCode) {
        case 37:
            return dispatch => {
                dispatch(attemptLeftMove());
            };

        case 39:
            return dispatch => {
                dispatch(attemptRightMove());
            };

        case 77:
            return dispatch => {
                dispatch(move());
            };

        case 82:
            return dispatch => {
                dispatch(generateReport());
            };

        case 80:
            console.log("Placing pacman");  //Need to be updated
            break;

        default:
            console.log(e.keyCode)
    }
};