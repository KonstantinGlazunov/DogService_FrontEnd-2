import { Button, Col, Form, InputGroup, Modal, Nav, Row } from "react-bootstrap"
import styles from './Registration.module.css';
import { useState } from "react";


const none:string = styles.qwertynone;
const block:string = styles.qwertyblock;

const Registration = () : JSX.Element => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Button variant="primary" className="mr-2" onClick={handleShow}>Registration</Button>       
        </Nav>
  
        <Modal show={show} onHide={handleClose} id = "modal-registration">
            <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit} id="registration-form">
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mark"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                  Please choose a first name.
                </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Otto"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com" required
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
          
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="I'm ready to adopt a dog for a while."
              // feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
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
export default Registration