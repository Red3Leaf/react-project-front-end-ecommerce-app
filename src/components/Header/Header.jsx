import React from "react"
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as ShopingCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart-black.svg';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions/user'



function Header(props) {

	const { numberOfProducts, user, logout, numberOfWishListProducts } = props
	
	return (
		<div className="header d-flex  align-items-center justify-content-between container mb-4 mt-4">
			<Link to="/">
			<Logo className="w-75"/>
			</Link>
			
			<div className="d-flex">
				{
					user ? <div>
								<p className="user_name_tag">{user.displayName}</p>
								<button className="btn btn-outline-dark m-1 btn_delogare" onClick={() => logout()}>Delogare</button>
							</div>
						 : <Link to="/login">
						 		<button className="btn btn-outline-dark m-1">Login</button> 
					 	   </Link>
				}

				<Link to="/wishList">
				<p className="m-2 ajust_wishList_icon"><Heart/> </p>
				</Link>
				<p className="mt-2 ">{numberOfWishListProducts}</p>
				
				<Link to="/cart">
					<p className="m-2"> <ShopingCart className="ml-2" /></p>
				</Link>
				<p className="mt-2 ">{ numberOfProducts }</p>
			</div>
			
		</div>
	);
}



function mapStateToProps(state) {
	
	return {
		numberOfProducts: state.cart.products.length,
		numberOfWishListProducts: state.wishList.wishList.length,
		user: state.user.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(logoutUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);