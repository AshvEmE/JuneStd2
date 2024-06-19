import React, { Component } from 'react'
import './AllPostsComponent.css'
import PostComponents from './PostComponents'
import ChosenPost from './ChosenPost'
import { UserService } from '../Services/UserService'

class AllPostsComponent extends Component {
	state = { posts: [], startId: 1 }
	userService = new UserService()
	// componentDidMount() {this.userService.getAllUsers().then(value => this.setState({posts: value}))}

	// selectPost = id => {
	// 	if (this.state.chosenPost) {
	// 		return
	// 	}
	// 	this.userService.selectPost(id).then(value => this.setState({chosenPost: value}))
	// }

	// closeSelect = () => {
	// 	this.setState({ chosenPost: null })
	// }

	render() {
		const { posts, chosenPost } = this.state
		return (
			<div className='AllPostsWrapper'>
				<button onClick={this.show2Posts}>Show 2 more posts</button>

				{posts.map(value => (
					<PostComponents item={value} key={value.id} />
				))}
			</div>
		)
	}

	show2Posts = async () => {
		let { posts, startId } = this.state
		let postsch = await this.userService.get2Posts(this.state.startId)
		let { user1, user2 } = postsch
		posts.push(user1)
		posts.push(user2)
		startId += 2
		this.setState({ posts, startId: startId })
	}
}
export default AllPostsComponent
