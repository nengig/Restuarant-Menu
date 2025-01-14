import React, { Component } from 'react';

class WaitTime extends Component {
  constructor(props) {
    super(props);
    this.state = { 
                    weekdayWaitTimes: {
                        morning: "5 - 10",
                        afternoon: "10 -15",
                        evening: "20 -30",
                    }, weekendWaitTimes: {
                        morning: "15 - 20",
                        afternoon: "20 -30",
                        evening: "30 +",
                    },
                };
  }

  render() {
    return (
      <div className='waitTime'>
        <h2>Average Wait Times</h2>
        <div id='waitFlex'>
            <div>
            <h3>Weekdays</h3>
            <ul>
                <li>Morning: {this.state.weekdayWaitTimes.morning} minutes</li>
                <li>Afternoon: {this.state.weekdayWaitTimes.afternoon} minutes</li>
                <li>Evening: {this.state.weekdayWaitTimes.evening} minutes</li>
            </ul>
            </div>
            <div>
            <h3>Weekends</h3>
            <ul>
                <li>Morning: {this.state.weekendWaitTimes.morning} minutes</li>
                <li>Afternoon: {this.state.weekendWaitTimes.afternoon} minutes</li>
                <li>Evening: {this.state.weekendWaitTimes.evening} minutes</li>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default WaitTime;
