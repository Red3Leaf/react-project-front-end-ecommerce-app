import React from 'react';
import Layout from '../components/Layout/Layout';
import HomeCategory from '../components/HomeCategory/HomeCategory';
import Products from "../utils/products.json";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			categoryNames: []
		};
	}

	componentDidMount() {
		const categories = Object.values(Products);
		const categoryNames = Object.keys(Products);
		this.setState({categories, categoryNames})
	}

	render() {
		
		return (
			<div>
				<Layout>

					<div className="container">
						<div className="row">
							{this.state.categories.map((category, index) => {
								return (
									<HomeCategory
										key={index}
										image={category.image}
										title={category.name}
										description={category.description}
										routeName={this.state.categoryNames[index]}
							/>
								)
							})}
						</div>
					</div>
				
				</Layout>
			</div>
		);
	}
}

export default Home;