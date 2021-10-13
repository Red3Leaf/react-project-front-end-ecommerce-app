import React from "react";
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart.js';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products: {}
        }
    }

    componentDidMount(){
        const productIdUrl = this.props.match.params.productId;
        const categoryValues = Object.values(products);
        let currentProduct;

        categoryValues.forEach((category) => {
           const findResult = category.items.find((item) => {
                return Number(productIdUrl) === item.id;
            })

            if(findResult !== undefined){
                currentProduct = findResult;
            }
        })

        this.setState({products: currentProduct})
    }


    render(){
        // console.log(this.state.products);
        const { name, image, id, price, currency, colour, size, material, brand, description } = this.state.products;
        const { addToCartInjected } = this.props

        return(
            <Layout>
                <div className="container product">
                    <div className="row">
                        <h1>{name}</h1>           
                        <div className="col image_panel">
                            <img src={image} alt="Product" className="item_image" />
                        </div>
                        <div className="col info_panel">
                            <h3 className="price">{price} {currency}</h3>
                            <button
                                className="btn btn-dark mb-3 "
                                onClick={() => addToCartInjected({
                                        product: {
                                            id,
                                            name,
                                            price,
                                            currency,
                                            image
                                        }
                                    })}
                                    >
                                Adauga in cos</button>
                            
                             { size ?<p> <b>Marime:</b> {size}</p>: null }
                             { colour ?<p> <b>Culoare:</b> {colour}</p>: null }
                             {material ? <p> <b>Material:</b> {material} </p> : null}
                             { brand ?<p> <b>Brand:</b> { brand }</p>: null }
                             { description ?<p> <b>Descriere:</b> <br /> { description }</p>: null }
                            
                           <br />
                           <br />
                           <br />
                           <br />
                        </div>
                    </div>
            </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return {
		addToCartInjected: (payload) => dispatch(addToCart(payload))
		// addToWishListInjected: (payload) => dispatch(addToWishList(payload))
	}
}

export default connect(null, mapDispatchToProps)(Product);