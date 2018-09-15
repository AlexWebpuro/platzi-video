import React from 'react'
import ListItems from './list-items'
import './my-playlist.css'

const MyPlaylist = (props) => {
	return(

			<li className="My-Playlist-li">
				{props.title} <small><a href={props.src}>ver</a></small>
			</li>
	)
}

export default MyPlaylist