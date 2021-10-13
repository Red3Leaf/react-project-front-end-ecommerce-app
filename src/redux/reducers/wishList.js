const initialState = {
	wishList: []
}

export function wishListReducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD_TO_WISHLIST':

			let productInCart = false;
            const updatedProducts = state.wishList.map(product => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })
			if (!productInCart) {
                return Object.assign({}, state, {
                    wishList: [
                        ...state.wishList,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    wishList: updatedProducts
                });
            }
			// const newState = {
			// 	...state,
			// 	wishList: [
			// 		...state.wishList,
			// 		action.payload.product
			// 	]
			// }
			// return newState;
		case 'REMOVE_FROM_WISHLIST':
			let index = -1;
				for (let i = 0; i < state.wishList.length; i++) {
				  if (state.wishList[i].id === action.payload.products.id) {
					   index = i;
					  break;
				  }

			}
			
			
			if (index !== -1) {		
				state.wishList.splice(index, 1)
				const newState2 = {
					wishList: [
							...state.wishList
						]
				}
				return newState2;
			}
		default:
			return state;
	  }
}