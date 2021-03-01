import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'


const AddProduct = () => {
    return (
        <div>
            <Form className = "add-product-form">

                <Form.Group controlId="productName">
                    <Form.Control placeholder="Product Name" />
                </Form.Group>

                <Form.Group controlId="productDescription">
                    <Form.Control placeholder="Description" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="productCategory">
                        <Form.Control as="select" defaultValue="">
                            <option>Category</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="productType">
                        <Form.Control as="select" defaultValue="">
                            <option>Type</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="productCountry">
                    <Form.Control as="select">
                        <option>Country of Origin</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="productPrice">
                        <Form.Control placeholder="Price" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="productUnitOfMeasure">
                        <Form.Control as="select" defaultValue="">
                            <option>Unit of Measure</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <div>Suggested Market Price: $PRICE</div>
                <Form.File 
                    id="custom-file"
                    label="Upload an Image"
                    custom
                />
                <Button variant="primary" type="submit">
                    Add New Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct
