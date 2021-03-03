import React, {useState, useEffect} from 'react'
import { Form, Modal, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import { addProduct, addProductError, getCategory } from '../actions';

//styled components
const SmallButton = styled.button`
    color: ${props => props.theme.smButtonTextColor};
    background-color: ${props => props.theme.smButtonColor};
    height: ${props => props.theme.smButtonHeight};
    border-radius: ${props => props.theme.smButtonBorderRadius};
    font-weight: ${props => props.theme.smButtonFontWeight};
    font-size: ${props => props.theme.smButtonFontSize};
    line-height: ${props => props.theme.smButtonLineHeight};
    text-align: ${props => props.theme.smButtonTextAlign};
    border: ${props => props.theme.smButtonBorder};
    padding: ${props => props.theme.smButtonPadding};
`
const FormHeader = styled.div`
    color: ${props => props.theme.secondaryHeaderColor};
    font-weight: ${props => props.theme.secondaryFontWeight};
    font-size: ${props => props.theme.secondaryFontSize};
    line-height: ${props => props.theme.secondaryLineHeight};
    text-align: ${props => props.theme.secondaryTextAlign};
    background-color: white;
`

const FormHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 20px;
    padding: 0px 40px 0px;
    background-color: white;

    h4 {
        background-color: white;
    }
`

const WhiteForm = styled.form`
  background-color: ${props => props.theme.formBgColor};
  padding: 0px 40px 20px;
  box-shadow: ${props => props.theme.formBoxShadow};
  border-radius: ${props => props.theme.formBorderRadius};
  border-radius: 5px;
  
  p {
    background-color: white;
    text-align: right;
    color: #C87D55;
    font-size: 15px;
  }
`

const FormInput = styled.input`
  background-color: ${props => props.theme.inputBackgroundColor};
  height: ${props => props.theme.inputHeight};
  border: ${props => props.theme.inputBorder};
  border-radius: ${props => props.theme.inputBorderRadius};
  font-weight: ${props => props.theme.inputFontWeight};
  font-size: ${props => props.theme.inputFontSize};
  line-height: ${props => props.theme.inputLineHeight};
  color: ${props => props.theme.inputColor};
  width: ${props => props.theme.inputWidth};
  padding: ${props => props.theme.inputPadding};
  margin-bottom: ${props => props.theme.inputMarginBottom};
`
const FormButton = styled.button`
  color: ${props => props.theme.buttonColor};
  background-color: ${props => props.theme.buttonBgColor};
  height: ${props => props.theme.buttonHeight};
  border-radius: ${props => props.theme.buttonBorderRadius};
  font-weight: ${props => props.theme.buttonFontWeight};
  font-size: ${props => props.theme.butotnFontSize};
  line-height: ${props => props.theme.buttonLineHeight};
  text-align: ${props => props.theme.buttonTextAlign};
  border: ${props => props.theme.buttonBorder};
  width: ${props => props.theme.buttonWidth};
  margin-bottom: 20px;
  `

const SuggestedPrice = styled.div`
    background-color: white;
    font-size: 16px;
    color: #868662;
    line-height: 19px;
    margin-bottom: 10px;
`

const AddProduct = ({categories, isFetchingCat, getCategory}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formValues, setFormValues] = useState({
            prod_name: '',
            prod_desc: '',
            price: '',
            inventory: "",
            image: "",
            category_name: "",
            type_name: "",
            unit_name: "",
    });

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(formValues.prod_name === "" || formValues.prod_desc === "") {
            addProductError();
        }else{
            addProduct(formValues);
            e.target.reset()
        }
    }

    // useEffect(() => {
    //         getCategory();
    //     }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
        if(isFetchingCat){
            return <h2> Loading Categories...</h2>;
        }

    return (
        <div>

            <SmallButton  onClick={handleShow}>
                Add Product
            </SmallButton>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <FormHeaderDiv>
                    <FormHeader>Add Product Details</FormHeader>
                    <h4 onClick={handleClose}>X</h4>
                </FormHeaderDiv>
    
                    <WhiteForm onSubmit={handleSubmit} className = "add-product-form">
                        <FormInput 
                            placeholder="Product Name" 
                            onChange={handleChange}
                            value={formValues.prod_name}
                            name="prod_name"
                            id="prod_name"
                            type="text"

                        />
                        <FormInput 
                            placeholder="Description"
                            onChange={handleChange}
                            value={formValues.prod_desc}
                            name="prod_desc"
                            id="prod_desc"
                            type="text"
                             />
                        <Form.Row>
                            <Form.Group as={Col} controlId="productCategory">
                                <FormInput as="select" defaultValue=""
                                    onChange={handleChange}
                                    value={formValues.category_name}
                                    name="category_name"
                                    id="category_name"
                                    >
                                    <option value="">--Select Category--</option>
                                    {/* {
                                        categories.map(category => {
                                            return (
                                                <option value={category.category_name}>{category.category_name}</option>
                                            )
                                        })
                                    } */}
                                    {/* <option value="animalProd">Animal Products</option>
                                    <option value="grains_beans">Grains/Beans</option>
                                    <option value="fruit">Fruit</option>
                                    <option value="veg">Vegetables</option>
                                    <option value="seeds_nut">Seeds/Nuts</option>
                                    <option value="other">Other</option> */}
                                </FormInput>
                            </Form.Group>
                            <Form.Group as={Col} controlId="productType">
                                <FormInput as="select" defaultValue=""
                                    onChange={handleChange}
                                    value={formValues.type_name}
                                    >

                                    <option>Type</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </FormInput>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="productCountry">
                            <FormInput as="select">
                                <option>Country of Origin</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </FormInput>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="productPrice">
                                <FormInput placeholder="Price" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="productUnitOfMeasure">
                                <FormInput as="select" defaultValue="Select Unit" >
                                    <option>Unit</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </FormInput>
                            </Form.Group>
                            <Form.Group controlId="productInventory">
                                <FormInput 
                                    placeholder="Inventory" 
                                    type='number' 
                                    step="0.1" 
                                    min='0'
                                    onChange={handleChange}
                                    value={formValues.inventory}
                                    name="inventory"
                                    id="inventory"
                                    />
                            </Form.Group>
                        </Form.Row>

                        <SuggestedPrice>Suggested Market Price: $PRICE</SuggestedPrice>

                        <FormInput
                            type="file"
                        />

                        <FormButton type="submit" onClick={handleClose}>
                            Add New Product
                        </FormButton>
                    </WhiteForm>
      
            </Modal>


        </div>
    )
}
const mapStateToProps = state => {
    return({
        categories: state.categories,
        isFetchingCat: state.isFetching,
        error: state.error
    
    })
}

export default connect(mapStateToProps, {addProductError, getCategory})(AddProduct)
