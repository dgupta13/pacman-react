import React from 'react'
import {PACMAN_SIZE} from '../config/constants'
import './style.css'

export const MapMatrix = (props) => {
	return <div
		className = 'board'
		style={{
			height: PACMAN_SIZE,
			width: PACMAN_SIZE,
		}}
	/>
}

export default MapMatrix