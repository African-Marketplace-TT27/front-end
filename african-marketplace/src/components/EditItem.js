import React, {useState, useEffect} from 'react'
import { Form, Modal, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import { addProduct, getProduct, addProductError, getCategory, getCountry, getType, getUnit } from '../actions';
import { axiosWithAuth } from '../utility/axiosWIthAuth';

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
const initialFormValues = {
            prod_name: '',
            prod_desc: '',
            price: '',
            inventory: '',
            image: "",
            category_name: "",
            type_name: "",
            unit_name: "",
            // country_name: "",
}

const initialAPIValues = {
    prod_name: 'something random',
    prod_desc: '',
    price: '',
    inventory: '',
    image: "",
    category_id: null,
    type_id: null,
    unit_id: null,
    // country_id:"",
}


const EditItem = ({product, addProduct, categories, isFetchingCat, getCategory, countries, getCountry, isFetchingCou, types, getType, isFetchingType, units, getUnit, isFetchingUnit}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [formValues, setFormValues] = useState(product);
    const [apiValues, setAPIValues] = useState(initialAPIValues)
    console.log('product api val', apiValues)
    const handleClose = () => {
        setShow(false);  
        // setFormValues(initialFormValues)
    };
    const handleChange = e => {
        console.log(formValues);
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
            //HERE WE ARE TRYING TO CHANGE category_name, type_name, unit_name TO BE category_id, type_id, unit_id to be digestable by our API.
        
        if(e.target.name === "category_id"){
            setAPIValues({...apiValues, "category_id": Number(e.target.value)})
            
        }

        else if(e.target.name === "type_id"){
            setAPIValues({...apiValues, "type_id": Number(e.target.value)})
            
        }
        // else if(e.target.name === "country_name"){
        //     setAPIValues({...apiValues, "country_id": e.target.value})
        //     console.log("3", apiValues)
        // }
        else if(e.target.name === "unit_id"){
            setAPIValues({...apiValues, "unit_id": Number(e.target.value)})
        }
        else {setAPIValues({...apiValues, [e.target.name]: e.target.value})}
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setAPIValues(formValues);
            console.log('apiValues in edititem!!!!',apiValues)
            //HERE WE ARE PASSING THE API VALUES
            addProduct(apiValues);
            deleteProduct();
            setShow(false);
            setFormValues(initialFormValues);
        

    }
    const deleteProduct =()=>{
        axiosWithAuth()
        .delete(`/products/${product.prod_id}`, product)
        .then((res)=>{
            getProduct(product)
            // getProduct(product.filter((item)=>item.id !== goat.id))
        })
        .catch((err)=>{
            console.log("Oooopsie", err)
        })
   }
    useEffect(() => {
            getCategory();
            getCountry();
            getType();
            getUnit();

            console.log('PRODUCT IN EDITITEM !!!', product)
            
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
        if(isFetchingCat){
            return <h2> Loading Categories...</h2>;
        }
        if(isFetchingCou){
            return <h2> Loading Countries...</h2>;
        }
        if(isFetchingType){
            return <h2> Loading Types...</h2>;
        }
        if(isFetchingUnit){
            return <h2> Loading Unit...</h2>;
        }


    return (
        <div className = 'edit-form'>

            <p  onClick={handleShow}>
                {product.prod_name}
            </p>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <FormHeaderDiv>
                    <FormHeader>Edit Product Details</FormHeader>
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
                                <FormInput as="select" 
                                    onChange={handleChange}
                                    value={formValues.category_id}
                                    name="category_id"
                                    id="category_name"
                                    >
                                    <option value={formValues.category_name}>--Select Category--</option>
                                    {
                                        categories.map(category => {
                                            return (
                                                <option value={category.category_id}>{category.category_name}</option>
                                            )
                                        })
                                    }
                                </FormInput>
                            </Form.Group>
                            <Form.Group as={Col} controlId="productType">
                                <FormInput as="select" 
                                    onChange={handleChange}
                                    value={formValues.type_id}
                                    name="type_id"
                                    id="type_name"
                                    >
                                    <option value="">--Select Type--</option>
                                    {
                                        types.map((type)=>{
                                            return (
                                                <option value={type.type_id}> {type.type_name}</option>
                                            )
                                        })
                                    }
                                    {/* <option value="freshProduct">Fresh Product</option>
                                    <option value="dryGoods">Dry Goods</option>
                                    <option value="goat">Goat</option>
                                    <option value="other">Other</option> */}
                                </FormInput>
                            </Form.Group>
                        </Form.Row>

                        {/* <Form.Group controlId="productCountry">
                            <FormInput as="select"
                            onChange={handleChange}
                            value={formValues.country_id}
                            name="country_name"
                            id="country_name"
                            >
                                <option value="">--Select Country--</option>
                                {
                                    countries.map(country => {
                                        return(
                                            <option value={country.country_id}>{country.country_name}</option>
                                        )
                                    })
                                }
                                {/* <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option> */}
                            {/* </FormInput>
                        </Form.Group> */}

                        <Form.Row>
                            <Form.Group as={Col} controlId="productPrice">
                                <FormInput 
                                placeholder="Price"
                                onChange={handleChange}
                                value={formValues.price}
                                name="price"
                                id="price"
                                type="text" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="productUnitOfMeasure">
                                <FormInput as="select"
                                onChange={handleChange}
                                value={formValues.unit_id}
                                name="unit_id"
                                id="unit_name"
                                >
                                    <option value="">--Unit--</option>
                                    {
                                        units.map((unit)=>{
                                            return(
                                                <option value={unit.unit_id}>{unit.unit_name}</option>
                                            )
                                        })
                                    }
                                    {/* <option value="kilograms">Kilograms</option>
                                    <option value="grams">Grams</option>
                                    <option value="dozen">Dozen</option>
                                    <option value="liters">Liters</option> */}
                            
                                </FormInput>
                            </Form.Group>
                            <Form.Group controlId="productInventory">
                                <FormInput 
                                    placeholder="Inventory" 
                                    type='number' 
                                    step="1" 
                                    min='0'
                                    onChange={handleChange}
                                    value={formValues.inventory}
                                    name="inventory"
                                    id="inventory"
                                    />
                            </Form.Group>
                        </Form.Row>

                        <SuggestedPrice>Suggested Market Price: Juan</SuggestedPrice>

                        <FormInput
                            type="file"
                        />

                        <FormButton type="submit">
                            Edit Product
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
        error: state.error,
        isFetchingCou: state.isFetchingCou,
        countries: state.countries,
        isFetchingType: state.isFetchingType,
        types: state.types,
        isFetchingUnit: state.isFetchingUnit,
        units: state.units,
    })
}

export default connect(mapStateToProps, {addProduct, addProductError, getCategory, getCountry, getType, getUnit})(EditItem)
