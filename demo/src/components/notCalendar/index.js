import React, {Component} from 'react';
import ImageUploader from "react-images-upload";
import TimeRangePicker from 'react-time-range-picker';
import './NotCalendar.css';

class NotCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pictures: [],
            capacity: 0,
            timeslotLength: 0.5,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.pickerupdate = this.pickerupdate.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleCapacityChange(event) {
        this.setState({name: event.target.capacity});
    }

    handleTimeslotLengthChange(event) {
        this.setState({name: event.target.timeslotLength});
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    pickerupdate = (start_time, end_time) => {
        // start and end time in 24hour time
        console.log(`start time: ${start_time}, end time: ${end_time}`)
    }

    render() {
        return(
            <div className="Main">
                <div>
                    <h1>Business Name:</h1>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <h1>Business Logo:</h1>
                    <ImageUploader
                        withIcon={true}
                        buttonText="Choose images"
                        onChange={this.onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}
                    />
                </div>
                <div className="Main">
                    <h1>Operating Hours:</h1>
                    <TimeRangePicker hourmarkers hourlines timeupdate={this.pickerupdate}/>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <h1>Set Timeslot Capacity:</h1>
                    <input type="number" value={this.state.capacity} onChange={this.handleCapacityChange} />
                </div>
                <div>
                    <h1>Timeslot Length (Hours):</h1>
                    <input type="number" value={this.state.timeslotLength} onChange={this.handleTimeslotLengthChange} />
                </div>
                <br />
                <button type="button">Generate</button>
                <br />
                <br />
            </div>
        )
    }
}

export default NotCalendar