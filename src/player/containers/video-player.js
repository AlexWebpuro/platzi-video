import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layer'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Control from '../components/video-player-control'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import Fullscreen from '../components/full-screen'
import formattedTime from '../../lib/utilities'

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		float: 0,
		finalDuration: 0,
		loading: false,
	}
	toggleClick = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event => {
		this.video = event.target
		this.setState({
			duration: formattedTime(this.video.duration),
			finalDuration: this.video.duration,
		})
	}
	handleTimeUpdate = event => {
		// console.log(this.video.currentTime)
		this.setState({
			currentTime: formattedTime(this.video.currentTime),
			float: this.video.currentTime,
		})
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}
	handleSeeking = event => {
		this.setState({
			loading: true,
		})
	}
	handleSeeked = event => {
		this.setState({
			loading: false,
		})
	}
	handleVolume = event => {
		this.video.volume = event.target.value
	}
	handleFullscreen = event => {
		if(!document.webkitIsFullScreen)
		{
			this.player.webkitRequestFullScreen()
			// console.log('OnClick!!!')
		} else {
			document.webkitExitFullscreen()
		}
	}
	setRef = element => {
		this.player = element
	}
	render() {
		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Control>
				<PlayPause
				pause= {this.state.pause}
				handleClick={this.toggleClick}
				/>
				<Timer 
				duration= {this.state.duration}
				currentTime={this.state.currentTime}
				/>
				<ProgressBar
				float={this.state.float}
				finalDuration={this.state.finalDuration}
				handleProgressChange={this.handleProgressChange }
				/>
				<Volume
				handleVolume={this.handleVolume}
				/>
				<Fullscreen
				handleFullscreen={this.handleFullscreen}
				/>
				</Control>
				<Title
				title="Esto es un video chido!"
				/>
				<Spinner
				active={this.state.loading}
				/>
				<Video
				pause={this.state.pause}
				autoplay={this.props.autoplay}
				src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				handleLoadedMetadata={this.handleLoadedMetadata}
				handleTimeUpdate={this.handleTimeUpdate}
				handleSeeking={this.handleSeeking}
				handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer