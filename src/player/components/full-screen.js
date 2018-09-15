import React from 'react'
import FullscreenIcon from '../../icons/components/fullscreen'
import './full-screen.css'

const Fullscreen = (props) => {
	return(
		<button className="Fullscreen" onClick={props.handleFullscreen}>
			<FullscreenIcon
			size={25}
			color='white'
			/>
		</button>
	)
}

export default Fullscreen