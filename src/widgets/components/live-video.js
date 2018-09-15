import React from 'react'
import './live-video.css'

function LiveVideo (props) {
	return(
		<div>
		 {
		 	props.isLive ?
			<div className="live">
				<p className="live-p"> {props.text} </p>
			</div>
			: <button
			ref={props.setRef}
			onClick={props.handleButton}>
			{props.valueButton}
			</button>
		 }
		</div>
	)
}

export default LiveVideo