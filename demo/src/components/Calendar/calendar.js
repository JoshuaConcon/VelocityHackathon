import React from 'react';
import Calendar from 'react-calendar'
import Dropdown from 'react-dropdown';
export default class BookingCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.state = {
            date: Date.now(),
            options: ['General Work Out', 'Cardio/Treadmill', 'Yoga Room'],
            selectedOption: null
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
        this.setState({
            selectedOption: option
        })
    }
    

    render() {
        return <div>
            <div style={{width: "50%", height: "200%"}}>
                <Calendar onChange={this.updateDate} />
                <Dropdown options={this.state.options} onChange={this.updateOption} value={this.state.selectedOption} placeholder="Select an option" />;
            </div>
        </div>
    }
};