import React from 'react'

const SellerProductCard = (props) => {
   const { product } = props
    
   return (
        <tr id={product.prod_id} className="table-bottom-border">
            <td className='product-image'><img src={product.image} alt={product.prod_name} width='200px'/></td>
            <td>{product.prod_name}</td>
            <td className='product-description'>{product.prod_desc}</td>
            <td className='product-inventory'>{product.inventory}</td>
            <td className='product-measure'>{product.unit_name}</td>
            <td>{product.category_name}</td>
            <td className='product-type'>{product.type_name}</td>
            <td>Delete</td>
        </tr>
    )
}

export default SellerProductCard
