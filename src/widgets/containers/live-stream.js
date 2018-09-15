import React, { Component } from 'react'
import LiveVideo from '../components/live-video'

class LiveStream extends Component {
	state = {
		text: '¡Estamos en vivo!',
		isLive: false,
		valueButton: 'ver live',
	}

	handleButton = event => {
		this.setState({
			isLive: !this.state.isLive,
		})
	}

	setButtonText = element => {
		this.button = element
	}
	render() {
		return(
			<LiveVideo
			text={this.state.text}
			isLive={this.state.isLive}
			setRef={this.setButtonText}
			handleButton={this.handleButton}
			valueButton={this.state.valueButton}
			/>
		)
	}
}

export default LiveStream