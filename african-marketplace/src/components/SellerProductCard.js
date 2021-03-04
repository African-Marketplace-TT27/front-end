import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utility/axiosWIthAuth'

const SellerProductCard = (props) => {
   const { product, getProduct } = props;
   const {push} = useHistory();
   console.log("TEST", product.prod_id)


   const deleteProduct =(goat)=>{
        axiosWithAuth()
        .delete(`/products/${product.prod_id}`, product)
        .then((res)=>{
            getProduct(product)
            // getProduct(product.filter((item)=>item.id !== goat.id))
        })
        .catch((err)=>{
            console.log("Oooopsie", err)
        })
   }
    
   return (
        <tr id={product.prod_id} className="table-bottom-border">
            <td className='product-image'><img src={product.image} alt={product.prod_name} width='200px'/></td>
            <td>{product.prod_name}</td>
            <td className='product-description'>{product.prod_desc}</td>
            <td className='product-inventory'>{product.inventory}</td>
            <td className='product-measure'>{product.unit_name}</td>
            <td>{product.category_name}</td>
            <td className='product-type'>{product.type_name}</td>
            <td onClick={deleteProduct} >🆇 <span style={{textDecoration: "underline", cursor: "pointer"}}>Delete</span></td>
        </tr>
    )
}

export default SellerProductCard
