import React from 'react';
import Calendar from 'react-calendar';
import Tiles from '../Tiles';
import Form from 'react-bootstrap/Form';
import Logo from './LOGO4_vive_fitness_toronto_gym_247.png';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap';
export default class BookingCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.state = {
            date: Date.now(),
            options: ['General Work Out', 'Cardio/Treadmill', 'Yoga Room'],
            selectedOption: "Please select a workout"
        };
    }

    updateDate(date) {
        console.log(date);
        this.setState({
            date: date
        })
    }

    updateOption(option) {
        console.log(option);
        // this.setState({
        //     selectedOption: option
        // })
    }
    

    render() {
        return <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">
                    <img src={Logo} width="75" style={{marginRight: "15px"}} className="d-inline-block align-top" />
                    Vive Fitness 24/7
                </a>
            </nav>
            <div style={{marginLeft: "35%", marginRight: "30%", marginTop: "25px"}}>
                <Calendar className="shadow mb-5 bg-white rounded" style={{width: "50%", border: "none"}} onChange={this.updateDate} />
            </div>
            {/* <div className="shadow mb-5 bg-white rounded" style={{marginLeft: "25%", marginRight: "30%", marginTop: "25px"}}>
                <DropdownButton key="Danger" id='dropdown-variants-Danger' variant="danger" title={this.state.selectedOption} onClick={this.updateOption}>
                    <Dropdown.Item eventKey="General Work Out">General Work Out</Dropdown.Item>
                    <Dropdown.Item eventKey="Cardio/Treadmill">Cardio/Treadmill</Dropdown.Item>
                    <Dropdown.Item eventKey="Yoga Room">Yoga Room</Dropdown.Item>
                </DropdownButton>
            </div> */}
            <Form.Group style={{width: "25%", marginLeft: "35%"}} controlId="formSector">
                <Form.Control as="select" defaultValue="Select Workout">
                    <option>Select Workout</option>
                    <option>General Workout</option>
                    <option>Cardio/Treadmill</option>
                    <option>Yogo Room</option>
                </Form.Control>
            </Form.Group>
            <div className="shadow mb-5 bg-white rounded" style={{marginLeft: "25%", marginRight: "30%", marginTop: "25px"}}>
                <Tiles name={this.state.selectedOption}/>
            </div>
        </div>
    }
};