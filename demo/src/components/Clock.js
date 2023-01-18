/* 
function Clock(props) {
    return (
        <div>
            <h1>Clock</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
 */

import React from "react";
import "./Clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // Happens when the component is rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // Happens when the component is removed from the DOM
    componentWillUnmount() {
        clearInterval(this.thimerID);
    }

    render() {
        const { date } = this.state;

        return (
            <div className="clock">
                <h1>Clock</h1>
                <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
