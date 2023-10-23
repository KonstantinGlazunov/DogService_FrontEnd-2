import { Button, Form, Modal, Nav } from "react-bootstrap"
import styles from './Authorization.module.css';
import { useState } from "react";
import Layout from "../../../layouts/Layout";
import Login from "./Login";


const none:string = styles.qwertynone;
const block:string = styles.qwertyblock;

const Authorization = () : JSX.Element => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <div className={block}>
        <Nav>
            <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
            <Button variant="primary" onClick={handleShow}>Registration</Button>
        </Nav>
        {/* <Login /> */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId ="Form.Password"
                >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
          
    </div>
    )
}
export default Authorization