import React from 'react'
import styled from 'styled-components'

//images
import sellerImg from '../images/Rectangle 11.png'
// import locIcon from '../images/LocIcon.png'

export default function SellerItem(props) {
    const {sellerItems} = props
    sellerItems.sort((a,b)=> 0.5-Math.random());
    console.log('randomized', sellerItems)

    return (
        <ItemContainer>
            {sellerItems.map((item)=>{
                        return <Item className="sellerItem">
                            {/* //Change the image below to be the api.image */}
                            <img src={sellerImg} alt="Bell Peppers" />
                            <div className="sellerItemDetails">
                                <NameNpriceCont className="nameNprice">
                                    <h6>{item.prod_name ? item.prod_name : "Bell Peppers"}</h6>
                                    <h6 className="price">{item.price ? item.price : "$99.99"}</h6>
                                </NameNpriceCont>
                                <div>
                                    <p>{item.prod_desc ? item.prod_desc : "Blah Blah Blah Blah Blah" }</p>
                                </div>
                                <Country>
                                    <h6>{item.country ? item.country : "📍 Nairobi, Kenya"}</h6>
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
color: #868662;
display: flex;
flex-direction: column;
    img{
        display:inline-block;
        width: 100%;
    }

    p{
        font-size: .9rem;
    }
`
//Name and Price Div
const NameNpriceCont = styled.div`
    /* border: 1px solid orange; */
    color: #AD7C82;
    display: flex;
    justify-content: space-between;
    margin: 1%;
    align-items:center;
    
    .price{
        color: #868662;
    } 
`

// Country 
const Country = styled.div`
    /* border: 1px solid yellowgreen; */
    display: flex;
    width: 100%;
    color: #FE861C;
    font-weight: bold;

    img{
        width: 13%;
        height: 13%;
    }
    `