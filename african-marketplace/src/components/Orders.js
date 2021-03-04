import React from 'react'

// components
import Navigation from './Navigation';
import NavRight from './NavRight';

// styles
import styled from 'styled-components';

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .content{
        text-align: center;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1024px){
        flex-direction: row;
    }
`

const Orders = () => {
    return (
        <OrderContainer>
        <div>
            <Navigation />
        </div>
        <div className="content">
            <h1>Order Details Coming Soon!</h1>
        </div>
        <NavRight />
        </OrderContainer>
    )
}

export default Orders;
