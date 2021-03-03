import React from 'react'

const SellerProductCard = (props) => {
   const { product, key } = props
    
   return (
        <tr id={key} className="table-bottom-border">
            <td className='product-image'><img src={product.image} alt={product.prod_name} width='200px'/></td>
            <td>{product.prod_name}</td>
            <td className='product-description'>{product.prod_Desc}</td>
            <td className='product-inventory'>{product.inventory}</td>
            <td className='product-measure'>{product.unit}</td>
            <td>{product.category}</td>
            <td className='product-type'>{product.type}</td>
            <td>Delete</td>
        </tr>
    )
}

export default SellerProductCard
