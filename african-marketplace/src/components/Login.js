import React from "react";
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/Sauti..svg'

const LoginContainer = styled.div`
width: 60%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
margin:0 auto;













`






const Login = () => {
  return (
    <LoginContainer>
        <img src={Logo} alt='Sauti logo'/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* Will make into a link later */}
       <p>Become a Seller | Sign Up</p>
      </Form>
    </LoginContainer>
  );
};

export default Login;
