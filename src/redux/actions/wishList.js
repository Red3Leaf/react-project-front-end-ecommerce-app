export function addToWishList(payload){
	return{
		type: 'ADD_TO_WISHLIST',
		payload: payload
	}
}

export function removeFromWishList(payload){
	return{
		type: 'REMOVE_FROM_WISHLIST',
		payload: payload
	}
}