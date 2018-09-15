import React from 'react'
import './progress-bar.css'

const ProgressBar = (props) => {
	return(
		<div className="ProgressBar">
			<input
			type="range"
			min={0}
			max={props.finalDuration}
			value={props.float}
			onChange={props.handleProgressChange}
			/>
		</div>
	)
}

export default ProgressBar