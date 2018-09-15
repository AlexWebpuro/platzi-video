import React from 'react'
import './timer.css'

const Timer = (props) => {
	return(
		<div className="Timer">
			 <p> {props.currentTime} | {props.duration}</p>
		</div>
	)
}

export default Timer