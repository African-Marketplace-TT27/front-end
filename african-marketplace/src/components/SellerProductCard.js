import React from 'react'

const SellerProductCard = (props) => {
   const { product, key } = props
    
   return (
        <tr id={key} className="border-bottom">
            <td><img src={product.image} alt={product.prod_name} width='200px'/></td>
            <td>{product.prod_name}</td>
            <td>{product.prod_Desc}</td>
            <td>{product.inventory}</td>
            <td>{product.unit}</td>
            <td>{product.category}</td>
            <td>{product.type}</td>
            <td>X - Delete</td>
        </tr>
    )
}

export default SellerProductCard
