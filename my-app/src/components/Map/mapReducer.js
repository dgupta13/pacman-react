const mapReducer = (state={matrixArray: []}, action) => {
  switch(action.type) {
    case 'DISPLAY_BOARD':
      return {
      	matrixArray: action.payload
      };

    default:
      return state;
  }
}

export default mapReducer