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
                    <h1>business name:</h1>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <h1>business logo:</h1>
                    <ImageUploader
                        withIcon={true}
                        buttonText="Choose images"
                        onChange={this.onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}
                    />
                </div>
                <div>
                    <h1>operating hours:</h1>
                    <TimeRangePicker hourmarkers hourlines timeupdate={this.pickerupdate}/>
                </div>
                <div>
                    <h1>set capacity:</h1>
                    <input type="number" value={this.state.capacity} onChange={this.handleCapacityChange} />
                </div>
                <div>
                    <h1>timeslot length (hours):</h1>
                    <input type="number" value={this.state.timeslotLength} onChange={this.handleTimeslotLengthChange} />
                </div>
            </div>
        )
    }
}

export default NotCalendar