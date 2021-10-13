import React from "react"
import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Git } from '../../assets/icons/github.svg'
import { ReactComponent as In } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Copyright } from '../../assets/icons/copyright.svg'

function Footer() {
	return (
		<div className="footer container">
	
			<div className="d-flex outer_div_footer">
			
				<div className="d-flex inner_div_footer">
					<h5> Link-uri rapide </h5>
					<Link className="link" to="/about">
						<p>Despre</p>
					</Link>
					<Link className="link" to="/termeniSiConditi">
						<p>Termeni si conditi</p>
					</Link>
				</div>
			
			
				<div className="d-flex inner_div_footer">
					<h5> Contacteaza-ma </h5>
					<p> <Mail /> bogdan.shop@office.com</p>
					<p> <Phone />+40725854562</p>
				</div>
			
			
				<div className="d-flex inner_div_footer">
					<h5> Contacteaza-ma </h5>
					<p> <Git /> Contact.git</p>
					<p> <In /> contact.linked.in</p>
				</div>
			
			</div>
		
			<div className="d-flex justify-content-center">
				<br />
				<p> <Copyright className="copyright-width"/> Acatrinei Bogdan, 2021</p>
			</div>
			
			
		</div>
	);
}

export default Footer;