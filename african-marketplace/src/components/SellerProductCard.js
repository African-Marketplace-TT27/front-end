import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utility/axiosWIthAuth'

const SellerProductCard = (props) => {
   const { product } = props
   const params = useParams();
   const {push} = useHistory();
   

   const deleteProduct =()=>{
        axiosWithAuth()
        .delete(`/products/${params.id}`)
        .then((res)=>{
            console.log("HERE IS THE ID", params)
            console.log("sellerProductCard delete", res)
        })
        .catch(()=>{})
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
