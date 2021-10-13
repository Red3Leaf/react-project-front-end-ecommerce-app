import React from 'react'
import Layout from "../../components/Layout/Layout";
import { removeFromCart } from '../../redux/actions/cart.js';
import { connect } from "react-redux"
import "./Cart.css"

function Cart(props) {
	
	const { cartProducts, removeFromCartInjected } = props;
	function Cart(props) {
		const totalSum = (products) => {
			return products.reduce((acc, product) => {
				return acc + product.quantity * product.price;
			}, 0)
		}
	}
	
	return (
		<div className="cart">
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
				
						cartProducts.map((cartProducts) => {
							// console.log(index);
							return (
								 <div className="">
									{
									 <div className="d-flex ">
											<p className="w-25 d-flex justify-content-center">{cartProducts.name}</p>
											<p className="w-25 d-flex justify-content-center">{cartProducts.price} {cartProducts.currency}</p>
											<p className="w-25 d-flex justify-content-center">x{ cartProducts.quantity }</p>
											<p className="w-25 d-flex justify-content-center">{ cartProducts.price * cartProducts.quantity } { cartProducts.currency }</p>
											<p onClick={() => {
													removeFromCartInjected({
														products: {
															// key: index,
															id: cartProducts.id
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
					
						
					props.cartProducts.length !== 0
						? null
							: <div>
								<h1 className="cartGol">Nici un produs in Cos</h1>
							  </div>
						
					}
				</div>
				</div>
			</Layout>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		cartProducts: state.cart.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCartInjected: (payload) => dispatch(removeFromCart(payload))
	
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart)