import { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks } = this.props;
        return (
            <div className="overview">
                {tasks.map((e, i) => {
                    return (
                        <div className="task" key={i}>
                            {e}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Overview;
