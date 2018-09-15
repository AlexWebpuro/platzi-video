import React from 'react'
import Logo from '../../../images/logo.png'
import MyPlaylist from '../../my-playlist/components/my-playlist'
import './related.css'

function Related (props) {
	return(
		<div className="Related">
			<img src={Logo} width = {250} />
			<p className="Related-title">My Playlist</p>
			<ol className="Related-ol">
			{
				props.itemList.map( (item) => {
					return(
						<MyPlaylist
						title={item.title}
						{...item}
						/>
					)
				})
			}
			</ol>
		</div>
	)
}

export default Related