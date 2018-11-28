import React, { Component } from 'react';
import { render } from 'react-dom';

class Time extends Component {
    constructor(props){
        super(props);
            this.state = {
                time: new Date().toLocaleTimeString()
            };
        }
        componentDidMount() {
            this.intervalID = setInterval(
                () => this.tick(), 
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }
        tick() {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }
    render() {
        return(
            <div className="clock">
                <h3>Kello on:</h3>
                <h3>{this.state.time}</h3>
            </div>
        );
    }
}
export default Time;