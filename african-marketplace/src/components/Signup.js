import React from "react";
import Logo from "../images/Sauti..svg";
import { Form, Button } from "react-bootstrap";
import styled from 'styled-components'


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


const Signup = () => {
  return (
    <SignUp>
      <img className='form-logo' src={Logo} alt="Sauti logo" />
      <WhiteForm>
          <FormInput type="text" placeholder="Name" />
          <FormInput type="email" placeholder="Enter email" />
          <FormInput type="password" placeholder="Password" />
          <FormInput type="password" placeholder="Confirm Password" />
          <FormInput  as="select">
            <option>Country</option>
          </FormInput>
          <Terms>
            <TermsAgree type="checkbox" />
            <TermsAgreeLabel>Agree to Terms and Conditions</TermsAgreeLabel>
          </Terms>
          <FormButton type="submit">
            Sign Up
          </FormButton>
           {/* Will make into a link later */}
       <p>Already have an account? | Log In</p>
      </WhiteForm>
    </SignUp>
  );
};

export default Signup;
