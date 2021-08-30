import React from 'react';
import Layout from '../components/Layout/Layout';
import HomeCategory from '../components/HomeCategory/HomeCategory';
import Products from "../utils/products.json";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Layout>

					<div className="container">
						<div className="row">
							<HomeCategory
								image="https://cms-cdn.thesolesupplier.co.uk/2019/04/Cover1.jpg"
								title="Pantofi"
								description="Cei mai tari pantofi"
							/>
							<HomeCategory
						
							/>
							<HomeCategory />
							<HomeCategory />
						</div>
					</div>
				
				</Layout>
			</div>
		);
	}
}

export default Home;