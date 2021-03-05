import React, { useState, useEffect } from "react";
import Logo from "../images/Sauti..svg";
import { Form, Button } from "react-bootstrap";
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import Schema from "../validation/Schema"

const SignUp = styled.div`
width: 40%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
margin:0 auto;
`
const WhiteForm = styled.form`
  background-color: ${props => props.theme.formBgColor};
  padding: ${props => props.theme.formPadding};
  box-shadow: ${props => props.theme.formBoxShadow};
  border-radius: ${props => props.theme.formBorderRadius};

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
    :disabled{
      background:grey
    }
`
const TermsAgree = styled.input` 
  width: 18px;
  height: 18px;
  border: 2px solid #BAB7AE !important;
  border-radius: 2px;
  margin-right: 8px;
`
const TermsAgreeLabel = styled.label` 
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: left;
  margin-bottom: 39px;
  color: #C87D55;
`

const Terms = styled.div`
  align-self: flex-start;
  background-color: white;
  display: flex;
  justify-content: flex-start;
`
const initialSUFormValues = {
  name: '',
  email: '',
  password: '',
  pwconfirm: '',
  country_id: 0,
  terms:''
};

const initialSUFormErrors = {
  name: '',
  email: '',
  password: '',
  pwconfirm: '',
  country_id: 0,
  terms:''
};

const Signup = () => {
  const [formValues, setFormValues] = useState(initialSUFormValues);
  const [formErrors, setFormErrors] = useState(initialSUFormErrors);
  const [Disabled, setDisabled] = useState(true);

  useEffect(() => {
    Schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    
    console.log(evt.target.value)
    Yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: evt.target.type === "checkbox" ? evt.target.checked : evt.target.value });
    
  };

  let history = useHistory();

  const formSubmit = (evt) => {
    evt.preventDefault();


    
    const { name,  email, password, country_id } = formValues;
    const newUser = { name,  email, password, country_id };
    console.log('newuser', newUser);
    axios
      .post('https://african-marketplace-tt27.herokuapp.com/api/auth/register ', newUser)
      .then((res) => {
        console.log(res.data);
        setFormValues('');
        history.push('/SellerDashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignUp>
      <img className='form-logo' src={Logo} alt="Sauti logo" />
      <WhiteForm onSubmit={(e) => {
              formSubmit(e);
            }}>
          <FormInput 
          name = "name"
          type="text" 
          placeholder="Name" 
          onChange = {handleChange}
          />

          <FormInput 
          name = "email"
          type="email" 
          placeholder="Enter email" 
          onChange = {handleChange}

          />

          <FormInput 
          name = "password"
          type="password" 
          placeholder="Password" 
          onChange = {handleChange}

          />

          <FormInput 
                    name = "pwconfirm"

          type="password" 
          placeholder="Confirm Password" 
          onChange = {handleChange}

          />
          <FormInput onChange = {handleChange} as="select" name ="country_id" >
            <option value = {0} >Country</option>
            <option value = {1} >Kenya</option>
            <option value = {2}>Uganda</option>
            <option value = {3} >Tanzania</option>
            <option value = {4} >Rwanda</option>
            <option value = {5} >South Sudan</option>
            <option value = {6} >Burudni</option>
            <option value = {7} >Democratic Republic of Congo (DRC)</option>
          </FormInput>
              <p>{formErrors.email}</p>
              <p>{formErrors.name}</p>
              <p>{formErrors.password}</p>
              <p>{formErrors.pwconfirm}</p>
          <Terms>
            <TermsAgree type="checkbox"
            onChange={handleChange}
            name="terms"
            value={formValues.terms}
            />
            <TermsAgreeLabel>Agree to Terms and Conditions</TermsAgreeLabel>
          </Terms>
          <FormButton type="submit"  disabled={Disabled}>
            Sign Up
          </FormButton>
       <p>              <span>Already have an account? | </span>
              <Link to='/login' className='loginLink'>
                Login
              </Link></p>

      </WhiteForm>
    </SignUp>
  );
};

export default Signup;
