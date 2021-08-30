import React from "react";

function HomeCategory(props) {
	const {image,title,description} = props;

	return (
		<div className="col-6 mb-4">
			<img className="w-100" src={image} alt="Category" />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

export default HomeCategory