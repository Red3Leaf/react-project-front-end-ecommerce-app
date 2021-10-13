import React from "react"
import Layout from "../components/Layout/Layout";
import ProductList from '../components/ProductList/ProductList';
import products from '../utils/products.json';
import BaseListSidebar from '../components/BaseListSidebar/BaseListSidebar'

class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: {},
			message: null
		};
	}
	

	componentDidMount() {
		const { match } = this.props;
		const categoryName = match.params.categoryName;
		this.setState({ category: products[categoryName] });
	}

	callbackFunction = (childData) => {
		console.log(childData);
		this.setState({message: childData})
  }

	render() {
		return (
			<div className="container">
				
				<Layout>
					<div className="row">
						<div className="col-12 col-md-2">
							<BaseListSidebar parentCallback = {this.callbackFunction} />
						</div>
						<div className="col-12 col-md-10">
							<h1>{this.props.match.params.categoryName}</h1>
							<ProductList products={this.state.category.items} filter={this.state.message} />
						</div>
					</div>
				</Layout>
				
				</div>
		)
	}
	
}

export default Category;