const initialState = {
	products: []
}

export function cartReducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD_TO_CART':

			let productInCart = false;
            const updatedProducts = state.products.map(product => {
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
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
			
		case 'REMOVE_FROM_CART':

				let index = -1;
				for (let i = 0; i < state.products.length; i++) {
				  if (state.products[i].id === action.payload.products.id) {
					   index = i;
					  break;
				  }

			}
			
			
			if (index !== -1) {		
				state.products.splice(index, 1)
				const newState2 = {
						products: [
							...state.products
						]
				}
				return newState2;
			}
			
				
		default: 
			return state;
	  }
}

