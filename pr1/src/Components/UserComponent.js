import React, { Component } from 'react';
import './UserComponent.css'

class UserComponent extends Component {



  
  render() {
    let {item, selectUser} = this.props
    return (
			<div>
				{item.id}-{item.name}
				<button onClick={() => selectUser(item.id)}>choose me</button>
			</div>
		)
  }
}

export default UserComponent;