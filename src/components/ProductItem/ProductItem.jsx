import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart.js';
import { addToWishList } from '../../redux/actions/wishList.js';
import { ReactComponent as Heart } from '../../assets/icons/heart-black.svg';
import "./ProductItem.css";
import { Link } from 'react-router-dom';


function ProductItem(props) {
	

	const { id, name, price, currency, image, addToCartInjected, addToWishListInjected } = props;
	// console.log(id);

	return (
		<div className="productItem col-12 col-md-4 d-flex flex-column align-items-center mb-5 mt-5">
			<Link to={`/product/${id}`}>
			<img src={ image } alt="product" className="item_image" />
			<p className="no_decoration">{ name }</p>
			<p className="no_decoration">{price} {currency}</p>
			</Link>
			<Heart className="invert_icon" onClick={() => {
				addToWishListInjected({
					product: {
						id,
						name,
						price,
						currency,
						image
					}
				})}} />
			<button className="btn btn-outline-dark" onClick={() => {
				addToCartInjected({
					product: {
						id,
						name,
						price,
						currency,
						image
					}
				})
				
			 } }>Adauga in cos</button>
		</div>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		addToCartInjected: (payload) => dispatch(addToCart(payload)),
		addToWishListInjected: (payload) => dispatch(addToWishList(payload))
	}
}

export default connect(null, mapDispatchToProps)(ProductItem);