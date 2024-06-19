import React, { Component } from 'react'
import './chosenPost.css'

class ChosenPost extends Component {
	render() {
		const { item, closeSelect } = this.props
		return (
			<div className='chosenPost'>
				<div>User Id {item.userId}</div>
				<div>Post Id {item.id}</div>
				<h1>Title</h1>
				<span>{item.title}</span>
				<h2>Body</h2>
				<p>{item.body}</p>
				<button onClick={closeSelect} className='closebtn'>
					Close
				</button>
			</div>
		)
	}
}

export default ChosenPost
