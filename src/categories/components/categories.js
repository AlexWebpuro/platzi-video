import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
import LiveStream from '../../widgets/containers/live-stream'

function Categories (props) {
	return(
		<div className="categories">
		<LiveStream/>
		<SearchContainer></SearchContainer>
		{
			props.categories.map( (item) => {
				return(
					 <Category 
					 key={item.id} 
					 {...item}
					 handleOpenModal={props.handleOpenModal}
					 />
				)
			})
		}
		</div>
	)
}

export default Categories