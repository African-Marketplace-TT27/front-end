import React, { useEffect } from 'react'
import { connect } from 'react-redux';

// components
import AddProduct from './AddProduct'
import SellerProductCard from './SellerProductCard'
import Navigation from './Navigation'
import NavRight from './NavRight'
import { getProduct }  from '../actions';

const Products = ({products, isFetching, getProduct}) => {
    useEffect(() => {
        getProduct();
        console.log("USE EFFECT", products)
        
    }, [JSON.stringify(products)]); // eslint-disable-line react-hooks/exhaustive-deps
    if(isFetching){
        return <h2> Loading Products...</h2>;
    }
    
    return (
        <div className='seller-dashboard'>
            <Navigation />
            <NavRight />
                <div className='products-list'>
                    <div>
                        <div className='primary-header'>My Products</div>
                    </div>

                <div className='products-search-add'>
                    <input className='search-input'type="text" placeholder='&#x1F50D;  Search' />
                    <AddProduct />
                </div>
                <table>
                    <thead>
                        <tr className = 'table-header' key={products.id}>
                            <th className="product-image" style={{width: "110px"}}></th>
                            <th>Product Name</th>
                            <th className="product-description">Product Description</th>
                            <th className="product-inventory" >Inventory</th>
                            <th className="product-measure">Measure</th>
                            <th>Category</th>
                            <th className='product-type' >Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => {
                                return (
                                    <SellerProductCard key={product.id} product={product} getProduct={getProduct}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
       </div>
    )
}
const mapStateToProps = (state) => {
    return({
        products: state.products,
        isFetching: state.isFetching,
        error: state.error
    })
}
export default connect(mapStateToProps, {getProduct})(Products);
