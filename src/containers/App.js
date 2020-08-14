import React from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import './App.css';
import Scroll from '../components/Scroll'


class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots : [],
	        searchField: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>{
			return response.json();
		})
		.then(users =>{
			this.setState({robots: users})
		});
		
	}

	onSearchChange=(event)=>{
		this.setState({searchField: event.target.value})
	}

	render(){
		const Filteredrobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if(this.state.robots.length===0){
			return <h1 className='header'>LOADING</h1>
		}
		else{
			return(
		      <div className='body tc'>
		        <h1 className='header'>ROBO FRIENDS</h1>
		        <Search searchChange={this.onSearchChange}/>
		        <Scroll>
		           <CardList robots={Filteredrobots}/>
		        </Scroll>
		      </div>     
	        );
	    }
		
	}
}
export default App;