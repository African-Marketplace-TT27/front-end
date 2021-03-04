import React from 'react'

// components
import Navigation from './Navigation';
import NavRight from './NavRight'

// styles
import styled from 'styled-components';

const SettingsContainer = styled.div`
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
const Settings = () => {
    return (
        <SettingsContainer>
            <Navigation />
            <NavRight />
        <div className="content">
            <div>
                <h1>Setting Details Coming Soon!</h1>
            </div>
        </div>
        </SettingsContainer>
    )
}

export default Settings
