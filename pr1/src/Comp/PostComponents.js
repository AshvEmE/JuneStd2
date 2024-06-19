import React, { Component } from 'react';
import './PostComponents.css'


class PostComponents extends Component {
  render() {
    let {item, selectPost} = this.props
    return (
			<div className='PostItem'>
				<div>UserId-{item.userId}</div>
				<div>id-{item.id}</div>
        <span>{item.title}</span>
        <button onClick={()=> selectPost(item.id)}>See All</button>
			</div>
		)
  }
}

export default PostComponents;