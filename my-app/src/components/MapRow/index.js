import React from 'react'
import {PACMAN_SIZE} from '../config/constants'
import MapMatrix from '../MapMatrix'

export const MapRow = (props) => {
	return <div
		className = 'row'
		style={{
			height: PACMAN_SIZE,
		}}
	>
	{
		props.matrix.map((cell,index) => <MapMatrix key={index} matrix={cell} />)
	}
	</div>
}

export default MapRow