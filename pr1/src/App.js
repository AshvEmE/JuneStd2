import React, { Component } from 'react';
import AllPostsComponent from './Comp/AllPostsComponent';
import './App.css'


class App extends Component {

  
	render() {
		return (
			<div className='Main'>
        <AllPostsComponent></AllPostsComponent>
			</div>
		)
	}
}

export default App;