import React from 'react'
import Map from '../Map'
import Pacman from '../Pacman'
import {matrix} from '../config/constants'
import store from '../config/store'

export const Board = () => {

  store.dispatch({
    type: 'DISPLAY_BOARD',
    payload: matrix,
  })

  return (
    <div style={{
        position: 'relative',
        width: '255px',
        height: '255px',
        margin: '20px auto',
      }}>
      <Map />
      <Pacman />
    </div>
  );
};

export default Board