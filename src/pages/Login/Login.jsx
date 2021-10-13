import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import  './login.css';

import { loginUser } from '../../redux/actions/user';
import { loginUserFacebook } from '../../redux/actions/user';

class Login extends React.Component {
	
	componentDidUpdate(prevProps) {
		if (this.props.userData !== prevProps.userData) {
			this.props.history.push('/');
		}
	}

	render() {
		
		const { loginUser, loginUserFacebook } = this.props;

		return (
		<div className="Login">
			<div className="container">
		    	<div className="row d-flex justify-content-center">
					<div className=" d-flex flex-column align-items-center login_input_area container_login ">
						<Link className="d-flex align-items-center justify-content-center" to="/">
							<Logo className="d-flex align-items-center w-75 main_logo_control"/>
						</Link>
							<div className="d-flex flex-column align-items-center justify-content-center button_container">
								<label htmlFor="user">Nume Utilizator
									<input className="d-flex align-item-center input_style" id="user" type="text" />
								</label>
								<label htmlFor="password">Nume Password
									<input className="d-flex align-item-center input_style" id="password" type="text" />
								</label>
							
								<button className="button btn btn-outline-dark" onClick={() => loginUser()}> <Google className="logoControl m-1" /> Google Signin</button>
								<button  className="button btn btn-outline-dark" onClick={() =>  loginUserFacebook()}> <Facebook className="logoControl m-1" />  Facebook Signin</button>
							</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userData: state.user.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: () => { dispatch(loginUser()) },
		loginUserFacebook: () => { dispatch(loginUserFacebook()) }
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);