import React, { Component } from 'react';
import UserComponent from './UserComponent';
import './UserComponent.css'

class AllUserComponents extends Component {
	state = { users: [], classState:'one', chosenUser: null}
  flag = false;

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(users => this.setState({ users: postsFromAPI }))
	}

 
  changeColor = () =>{
      if(this.flag){
        this.setState({classState:'one'})
      }else{
        this.setState({ classState: 'two' })
      }
      this.flag = !this.flag;
  }

  selectUser = (id) => {
         let user = this.state.users.find(value => value.id === id)
         this.setState({chosenUser: user})
  }

	render() {
    let {users, classState, chosenUser} = this.state
		return <div>

      <h1 onClick={this.changeColor} className={classState}>All users Page</h1>
      {
        users.map(value => 
         (<UserComponent item={value} key={value.id} selectUser={this.selectUser}/>)  
        )  
      }

      <hr></hr>
      { chosenUser &&
        (<UserComponent item={chosenUser} selectUser={this.selectUser}/>)
      }
    </div>
	}
}

export default AllUserComponents;