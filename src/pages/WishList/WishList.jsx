import React from 'react';
import { connect } from 'react-redux';
import Layout from "../../components/Layout/Layout";
import { removeFromWishList } from '../../redux/actions/wishList.js';
import './WishList.css'

function WishList(props) {


	const { wishListProducts, removeFromWishListInjected } = props;
	function Cart(props) {
		const totalSum = (products) => {
			return products.reduce((acc, product) => {
				return acc + product.quantity * product.price;
			}, 0)
		}
	}

	return (
		<div className="wishlist">
			<Layout>
				<div className="default_height">
					<div className="container-fluid container-min-max-width container">
						<div className="d-flex justify-content-between text-center h4 text-bold">
                			<p className="w-25">Produs</p>
                			<p className="w-25">Pret</p>
                			<p className="w-25">Cantitate</p>
                			<p className="w-25">Total</p>
                		</div>

						{

							wishListProducts.map((wishListProducts) => {

								return (
									<div>

										{

										 <div className="d-flex">

												<p className="w-25 d-flex justify-content-center">{ wishListProducts.name }</p>
												<p className="w-25 d-flex justify-content-center">{wishListProducts.price} {wishListProducts.currency}</p>
												<p className="w-25 d-flex justify-content-center">x{ wishListProducts.quantity }</p>
												<p className="w-25 d-flex justify-content-center">{ wishListProducts.price * wishListProducts.quantity } { wishListProducts.currency }</p>
												<p onClick={() => {
														removeFromWishListInjected({
															products: {
																// key: index,
																id: wishListProducts.id
															}
														})

													 } }
												><b className="remove_button">X</b></p>

										</div>
										}
									</div>

								)
							})

						}

						{
						

						props.wishListProducts.length !== 0
							? null
								: <div>
									<h1 className="cartGol">Nici un produs in Wish List</h1>
								  </div>

						}
					</div>
				</div>
			</Layout>
		</div>
	)
}

function mapStateToProps(state){
	return {
		wishListProducts: state.wishList.wishList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromWishListInjected: (payload) => dispatch(removeFromWishList(payload))
	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);