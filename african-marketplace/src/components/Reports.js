import React from 'react'

// components 
import Navigation from './Navigation';
import NavRight from './NavRight'

// styles
import styled from 'styled-components';

const ReportsContainer = styled.div`
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
const Reports = () => {
    return (
        <ReportsContainer>
        <div>
            <Navigation /> 
        </div>
        <div className="content">
            <h1>Report Details Coming Soon!</h1>
        </div>
        <NavRight />
        </ReportsContainer>
    )
}

export default Reports
