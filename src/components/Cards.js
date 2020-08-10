import React,{ Component } from 'react';
import './Cards.css';


class Card extends Component {
	render(){
		const data=this.props;
		console.log(data)
		return(
		<div>
			<div className="row pt-5">
				<div className="offset-2 offset-md-4 col-md-4 pb-3"><em>Updated on : {new Date(data.data.date).toDateString()}</em></div>
			</div>
			<div className="row">
				<div className="offset-2 offset-md-1 col-md-3 col-8">
					<div className="card crd bg-danger">
						<div className="card-header">Infected</div>
						<div className="card-body">{data.data.confirmed}</div>
					</div>
				</div>
				<div className="offset-2 offset-md-0 col-md-3 col-8">
					<div className="card crd mt-3 mt-md-0 bg-success">
                                                <div className="card-header">Recovered</div>
                                                <div className="card-body">{data.data.recovered}</div>
                                        </div>
				</div>
				<div className="offset-2 offset-md-0 col-md-3 col-8">
					<div className="card crd mt-3 mt-md-0 bg-secondary">
                                                <div className="card-header">Death</div>
                                                <div className="card-body">{data.data.deaths}</div>
                                        </div>
				</div>
			</div>
			</div>
		)
	}
}

export default Card;
