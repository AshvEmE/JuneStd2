export class UserService {
	url = 'https://jsonplaceholder.typicode.com'

	getAllUsers() {
		return fetch(`${this.url}/posts`)
			.then(response => response.json())
			.then(postsFromAPI => {
				return postsFromAPI
			})
	}

	selectPost(id) {
		return fetch(`${this.url}/posts/${id}`)
			.then(value => value.json())
			.then(value => value)
	}

	async get2Posts(startId) {
		let user1 = await this.selectPost(startId)
		let user2 = await this.selectPost(++startId)
    return{user1,user2}
	}
}
