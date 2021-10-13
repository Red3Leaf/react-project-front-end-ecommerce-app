import React from 'react';
import './BaseListSidebar.css'

function BaseListSidebar(props) {
	return (
		<div className="baseListSidebar ">
			<h2>Filtre</h2>
			<b><input type="radio" name="priceFilter" onClick={ () => {
					props.parentCallback(50);	
			}} /> 0 Lei - 50 Lei </b>
			<b><input type="radio" name="priceFilter" onClick={ () => {
					props.parentCallback(100);	
			}} /> 50 Lei - 100 Lei </b> 
			<b><input type="radio" name="priceFilter" onClick={ () => {
					props.parentCallback(150);	
			}} />  100 LEi - 150 Lei </b>
			<b><input type="radio" name="priceFilter" onClick={ () => {
					props.parentCallback(null);	
			}} />  Toate produsele </b>
			
		</div>
	)
}

export default BaseListSidebar;