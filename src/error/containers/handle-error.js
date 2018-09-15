import React, { Component } from 'react'
import RegularError from '../Components/regular-error'

class HandleError extends Component {
	state = {
		handleerror: false
	}
	componentDidCatch(err, inf) {
		this.setState({
			handleError: true,
		})
		// Envía este rror a un servicio como Sentry
	}
	render() {
		if(this.state.handleError){
				return(
					<RegularError />
				)
			}
		return this.props.children
	}
}

export default HandleError