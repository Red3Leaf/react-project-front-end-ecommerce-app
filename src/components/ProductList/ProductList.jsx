import React from 'react'
import ProductItem from '../ProductItem/ProductItem';


function ProductList(props) {

	const { products } = props;
	

	return (
		<div className="container-fluid container">
			<div className="row ">
				
				{
					(products)
						? products.map((product, index) => {
							return (
								(props.filter !== null)
								? (products[index].price < props.filter)
									? <ProductItem
										key={index}
										id={product.id}
										name={ product.name }
										price={ product.price }
										currency={ product.currency }
										image={ product.image }
									  />
									: null
								:	<ProductItem
								key={index}
								id={product.id}
								name={ product.name }
								price={ product.price }
								currency={ product.currency }
								image={ product.image }
							  />
						)
					})
						: null
				}
			</div>
		</div>
	)
}

export default ProductList;