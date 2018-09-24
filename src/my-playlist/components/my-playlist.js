import React from 'react'
import ListItems from './list-items'
import './my-playlist.css'

const MyPlaylist = (props) => {
	return(

			<li className="My-Playlist-li">
				<a href={props.src}>
					{props.title}
				</a>
			</li>
	)
}

export default MyPlaylist