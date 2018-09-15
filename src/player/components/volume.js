import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'

const Volume = (props) => {
	return(
		<button className="Volume-range">
			<VolumeIcon size={25} color="white"/>
			<input 
			type="range"
			min={0}
			max={1}
			step={.25}
			onChange={props.handleVolume}
			/>
		</button>
	)
}

export default Volume