import React, { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks } = this.props;
        return (
            <div className="overview">
                <ul className="taskList">
                    {tasks.map((e) => {
                        return (
                            <li className="task" key={e.id}>
                                {e.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Overview;
