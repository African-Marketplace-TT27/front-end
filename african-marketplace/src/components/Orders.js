import React from 'react'

// components
import Navigation from './Navigation';
import NavRight from './NavRight';

// styles
import styled from 'styled-components';

const OrderContainer = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 1024px){
    flex-direction: row;
    .content{
        display: flex;
        flex-direction: column;
        width:100vw;
        margin-left: .5rem;
    }
}
`

const Orders = () => {
    return (
        <OrderContainer>
            <Navigation />
            <NavRight />
        <div className="content">
            <div>
                <h1>Order Details Coming Soon!</h1>
            </div>
        </div>
        </OrderContainer>
    )
}

export default Orders;
