import React, {Component} from 'react';
import ImageUploader from "react-images-upload";

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
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleCapacityChange(event) {
        this.setState({name: event.target.capacity});
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    render() {
        return(
            <div>
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
                </div>
                <div>
                    <h1>set capacity:</h1>
                    <input type="number" value={this.state.capacity} onChange={this.handleCapacityChange} />
                </div>
                <div>
                    <h1>timeslot length:</h1>
                </div>
            </div>
        )
    }
}

export default NotCalendar