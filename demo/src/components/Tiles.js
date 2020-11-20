import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Tiles extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>9:00am - 10:00am</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>10:00am - 11:00am</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>11:00am - 12:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>12:00pm - 1:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>1:00pm - 2:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>2:00pm - 3:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>3:00pm - 4:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>5:00pm - 6:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>6:00pm - 7:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>7:00pm - 8:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                    <tr>
                        <td>8:00pm - 9:00pm</td>
                        <td>General Workout (Co-ed)</td>
                        <td>10 spots</td>
                        <td><Button>Book</Button></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Tiles;