import React from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css';

function Layout(props) {
	return (
		<div className="layout">
			<Header/>
			{/* AICI VA FI AFISAT CONTINUTUL PAGINI */}
			{props.children}
			<Footer className="footer" />
		</div>
	);
}

export default Layout;