import React from 'react'
import styled from 'styled-components'

//images
import sellerImg from '../images/Rectangle 11.png'
import locIcon from '../images/LocIcon.png'

export default function SellerItem(props) {
    const {sellerItems} = props

    return (
        <ItemContainer>
            {sellerItems.map((item)=>{
                        return <Item className="sellerItem">
                            {/* //Change the image below to be the api.image */}
                            <img src={sellerImg} alt="Bell Peppers" />
                            <div className="sellerItemDetails">
                                <NameNpriceCont className="nameNprice">
                                    <h6>{item.prodName ? item.prodName : "Bell Peppers"}</h6>
                                    <h6>{item.price ? item.price : "$99.99"}</h6>
                                </NameNpriceCont>
                                <div>
                                    <p>{item.prodDesc ? item.prodDesc : "Blah Blah Blah Blah Blah" }</p>
                                </div>
                                <Country>
                                    <img src={locIcon} alt="Location Icon"/>
                                    <p>{item.country ? item.country : "Nairobi, Kenya"}</p>
                                </Country>
                            </div>
                        </Item>
                    })}
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
/* border: 3px solid magenta; */
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 1% 3%;

`

const Item = styled.div`
/* border: 2px solid turquoise; */
width: 22%;
margin:2% .5%;
box-shadow: 0px 30px 60px -40px #893A00;
border-radius: 5px;
background: #FFFFFF;

    img{
        display:inline-block;
        width: 100%;
    }
`
//Name and Price Div
const NameNpriceCont = styled.div`
    /* border: 1px solid orange; */
    color: red;
    display: flex;
    justify-content: space-between;
    margin: 1%;
    align-items:center;
    
`

// Country 
const Country = styled.div`
    /* border: 1px solid yellowgreen; */
    display: flex;
    width: 100%;

    img{
        width: 13%;
        height: 13%;
    }

    `