import React, { Component } from 'react'
import './video.css'

class Video extends Component {
	togglePlay() {
		if(this.props.pause) {
			this.video.play()
			console.log('Play')
		} else {
			this.video.pause()
		}
	}


	componentWillReceiveProps(nexProps){
		if(nexProps.pause !== this.props.pause) {
			this.togglePlay()
		}
	}
	setRef = element => {
		this.video = element
	}
	render() {
		const {
			handleLoadedMetadata,
			handleTimeUpdate,
			parseSeconds,
			handleSeeking,
			handleSeeked,
		} = this.props
		return(
			<div className="Video">
				<video
					autoPlay= {this.props.autoplay}
					src={this.props.src}
					ref={this.setRef}
					onLoadedMetadata={handleLoadedMetadata}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleSeeking}
					onSeeked={handleSeeked}
				/>
			</div>
		)
	}
}

export default Video