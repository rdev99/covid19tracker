import React,{ Component } from 'react';
import './App.css';
import logo from './assets/covid1.svg';
import { data } from './api/';
import Card from './components/Cards';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			data : {},
			country : ''
		}
	}

	async componentDidMount() {
		const covidData = await data();
		this.setState({data : covidData });
	}

	countryChange = async (country) => {
		const covidData = await data(country);
		this.setState({data : covidData, country : country});
	}

	render() {
		
		return(
			<div className="App">
				<h1 className="title pt-5">COVID 19</h1>
				<img className="covidlogo" src={logo} alt="covidlogo"/>
				<Card
				data = {this.state.data}
				/>	
			</div>
		)
	}
}

export default App;
