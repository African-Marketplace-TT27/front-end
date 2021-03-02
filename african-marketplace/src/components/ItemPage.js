import sellerImg from '../images/Rectangle 11.png'
import React from 'react';
import {useForm} from 'react-hook-form'

const ItemPage = () => {
  const {register, handleSubmit, errors} = useForm();
  
  

  const onSubmit = (data) =>{
    console.log(data);
  } 
  return (
    <div className ='item-page'>
        <img src = {sellerImg}/>
        <h2>Item Name</h2>
        <h3>Item Country of origin</h3>
        <h3>Item Price $20</h3>
        <p>Item description</p>
        <form onSubmit ={handleSubmit(onSubmit)}>
            <input type = 'number'
                name = 'itemCount'
                id = 'quantity'
                placeholder = '0'
                min = '1'
                max = '5'
                ref = {register}/>
            <input type = 'submit'/>
        </form>
        
      
    </div>
  );
  
};

export default ItemPage;
