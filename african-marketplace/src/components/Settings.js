import React from 'react'

// components
import Navigation from './Navigation';
import NavRight from './NavRight'

// styles
import styled from 'styled-components';

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .content{
        text-align: center;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1024px){
        flex-direction: row
    }
`
const Settings = () => {
    return (
        <SettingsContainer>
        <div>
            <Navigation />
        </div>
        <div className="content">
            <h1>Setting Details Coming Soon!</h1>
        </div>
        <NavRight />
        </SettingsContainer>
    )
}

export default Settings
