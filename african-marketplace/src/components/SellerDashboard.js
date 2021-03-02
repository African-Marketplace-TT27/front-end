import React, {useState, useEffect} from 'react'
import AddProduct from './AddProduct'
import SellerProductCard from './SellerProductCard'

// dummy data
const products = [
    { prod_id: 1, image: 'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', prod_name: 'Eggs', prod_Desc: 'These are eggs. They are very good', category: 'Animal Products', country: 'Kenya', type: 'Eggs', price: '$3.00', unit: 'dozen', inventory: 50 }, 
    { prod_id: 2, prod_name: 'Milk', prod_Desc: 'Got Milk?', category: 'Animal Products', country: 'Uganda', type: 'Milk', price: '$3.00', unit: 'gallon', inventory: 32 }, 
    { prod_id: 3, prod_name: 'Beans', prod_Desc: 'Beans, beans, the magical fruit. The more you eat, the more you...', category: 'Grains/Beans', country: 'Tanzania', type: 'Beans', price: '$3.00', unit: 'pound', inventory: 34.5}, 
    { prod_id: 4, prod_name: 'Maize', prod_Desc: 'Maize is such a corny word for corn', category: 'Grains/Beans', country: 'Kenya', type: 'Maize', price: '$2.00', unit: 'pound', inventory: 5.5}, 
    { prod_id: 5, prod_name: 'Avocado', prod_Desc: 'Knowledge is knowning Avocado is a fruit. Wisdom is knowing whether to put it in a fruit salad', category: 'Fruit', country: 'South Sudan', type: 'Avocado', price: '$5.00', unit: 'pound', inventory: 300.3}, 
]

const SellerDashboard = () => {
    //
    return (

        <div>
            <div>
                <h1>My Products</h1>
                <div>Profile Image Placeholder</div>
            </div>
            <div>
                <input type="text" placeholder='Search' />
                <AddProduct />
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Inventory</th>
                        <th>Unit of Measure</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <SellerProductCard key={product.prod_id} product={product} />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default SellerDashboard