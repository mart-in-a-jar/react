import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onButtonClicked, title, countNumber } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <button className="hol" onClick={onButtonClicked}>
                    Click me!
                </button>
                <p>{countNumber}</p>
            </div>
        );
    }
}

export default MyComponent;
