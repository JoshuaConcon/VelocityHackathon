import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import soctiaLogo from '../resources/scotiaLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

class SBAForm extends Component {
    constructor(props) {
        super(props)
        this.websiteExits = this.websiteExits.bind(this)
        this.appExits = this.appExits.bind(this)
        this.state = {
            existingWeb: false,
            existingApp: true,
            formSubmitted: false
        }
    }

    websiteExits(e){
        if (e.target.value === "yes"){
            this.setState({existingWeb: true})
        }
        else {
            this.setState({existingWeb: false})
        }
    }

    appExits(e){
        if (e.target.value === "yes"){
            this.setState({existingApp: true})
        }
        else {
            this.setState({existingApp: false})
        }
    }

    render() {
        return (
            this.state.formSubmitted ?
                <div style={{width: "100%", marginTop: "120px", textAlign: "center"}}>
                    <img src={soctiaLogo}></img>
                    <h1>Your submission is under approval</h1>
                </div>
                :
                <Form style={{margin: "20px 5% 0 5%"}}>
                    <Form.Group controlId="formBusinessName">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group controlId="formSector">
                        <Form.Label>Business Sector</Form.Label>
                        <Form.Control as="select" defaultValue="">
                            <option></option>
                            <option>Retail</option>
                            <option>Restaurant</option>
                            <option>Fitness</option>
                            <option>Barber/Salon</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formOperation">
                        <Form.Label>Do you plan on continuing to operate</Form.Label>
                        <Form.Control as="select" defaultValue="">
                            <option></option>
                            <option>yes</option>
                            <option>no</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formAppointment">
                        <Form.Label>Do you operate based on appointment</Form.Label>
                        <Form.Control as="select" defaultValue="">
                            <option></option>
                            <option>yes</option>
                            <option>no</option>
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="formExistingWeb">
                                <Form.Label>Do you have an existing website</Form.Label>
                                <Form.Control onChange={this.websiteExits} as="select" defaultValue="">
                                    <option></option>
                                    <option>yes</option>
                                    <option>no</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            {this.state.existingWeb ?
                                <Form.Group controlId="formURL">
                                    <Form.Label>Please provide your website URL</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                                :
                                <Form.Group controlId="formURL">
                                    <Form.Label>Please provide your website URL</Form.Label>
                                    <Form.Control disabled/>
                                </Form.Group>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formAppointmentSystem">
                                <Form.Label>Do you currently have an appointment system</Form.Label>
                                <Form.Control onChange={this.appExits} as="select" defaultValue="">
                                    <option></option>
                                    <option>yes</option>
                                    <option>no</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            {!this.state.existingApp ?
                                <Form.Group controlId="formBenefit">
                                    <Form.Label>On a scale of 1-10 how much could you benefit from an appointment system</Form.Label>
                                    <Form.Control as="select" defaultValue="1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </Form.Group>
                                :
                                <Form.Group controlId="formBenefit">
                                    <Form.Label>On a scale of 1-10 how much could you benefit from an appointment system</Form.Label>
                                    <Form.Control disabled as="select" defaultValue="1"/>
                                </Form.Group>
                            }
                        </Col>
                    </Row>
                    <Button onClick={() => this.setState({formSubmitted: true})} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        )
    }
}

export default SBAForm;