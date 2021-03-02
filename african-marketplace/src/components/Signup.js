import React from "react";
import Logo from "../images/Sauti..svg";
import { Form, Button } from "react-bootstrap";
import styled from 'styled-components'


const SignUp = styled.div`
width: 60%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
margin:0 auto

`
const Signup = () => {
  return (
    <SignUp><br>
    </br>
      <img src={Logo} alt="Sauti logo" />
      <Form>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control  as="select">
              <option>Country</option>
            </Form.Control>
          </Form.Group>
        
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms and Condtitions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
           {/* Will make into a link later */}
       <p>Already have an account? | Log In</p>
      </Form>
    </SignUp>
  );
};

export default Signup;
