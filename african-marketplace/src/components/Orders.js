import React from 'react'

// components
import Navigation from './Navigation';
import NavRight from './NavRight';

const Orders = () => {
    return (
        <>
        <div>
            <Navigation />
            <NavRight />
        </div>
        <div className="content">
            <h1>Order Details Coming Soon!</h1>
        </div>
        </>
    )
}

export default Orders;
