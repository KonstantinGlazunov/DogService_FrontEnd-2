import { Button, Col, Form, InputGroup, Modal, Nav, Row } from "react-bootstrap"
import styles from './Login.module.css';
import { useState } from "react";

const none:string = styles.qwertynone;
const block:string = styles.qwertyblock;

const Login = () : JSX.Element => {

    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow1 = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event : any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return(
    <div className={block}>
        <Nav>
            <Button variant="primary" className="mr-2" onClick={handleShow1}>Log In</Button>
        </Nav>
      
        <Modal show={show1} onHide={handleClose} id = "modal-avtorisation">
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form noValidate validated={validated} onSubmit={handleSubmit} id="avtorisation-form">
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com" required
                            autoFocus
                        />
                <Form.Control.Feedback type="invalid">
                Please provide a valid e-mail.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group
                className="mb-3"
                controlId ="Form.Password"
                >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" required/>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>

          <Button type="submit">Submit form</Button>
        </Form>

        </Modal.Body>
            <Modal.Footer>
           
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal> 
          
    </div>

    )
}
export default Login