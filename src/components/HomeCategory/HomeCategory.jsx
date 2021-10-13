import React from "react";
import { Link } from "react-router-dom";
import "./HomeCategory.css"

function HomeCategory(props) {
	const {image,title,description,routeName} = props;
	// console.log(props.products.id);
	return (
		<div className="col-12 col-md-6 mb-4 HomeCategory">
			<Link className="link" to={`/category/${routeName}`}>
				<img className="w-100 h-75" src={image} alt="Category" />
				<h2>{title}</h2>
				<p>{description}</p>
			</Link>
		</div>
	);
}

export default HomeCategory