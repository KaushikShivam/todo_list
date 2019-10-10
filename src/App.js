import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
	render() {
		return (
			<div class='App'>
				<TodoList />
			</div>
		);
	}
}

export default App;
