import React, {useState} from 'react'
import { Form, Button, Col, Modal } from 'react-bootstrap'


const AddProduct = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant='primary' onClick={handleShow}>
                Add Product
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Add Product Details</Modal.Title>
                    <h4 onClick={handleClose}>X</h4>
                </Modal.Header>
                <Modal.Body>
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
                            <Form.Group controlId="productInventory">
                                <Form.Control placeholder="Inventory" type='number' step="0.1" min='0'/>
                            </Form.Group>
                        </Form.Row>

                        <div>Suggested Market Price: $PRICE</div>

                        <Form.File 
                            id="custom-file"
                            label="Upload an Image"
                            custom
                        />

                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Add New Product
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default AddProduct
