import React from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout(props) {
	return (
		<div>
			<Header />
			{/* AICI VA FI AFISAT CONTINUTUL PAGINI */}
			{props.children}
			<Footer />
		</div>
	);
}

export default Layout;