import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    displayEdit(task) {
        const field = document.querySelector(`input[data-id=${task.id}]`);
        field.value = task.text;
        field.classList.add("active");
        field.focus();
    }

    render() {
        const { tasks, deleteFunc } = this.props;
        return (
            <div className="overview">
                <ul className="taskList">
                    {tasks.map((e) => {
                        return (
                            <li className="task" key={e.id}>
                                <input type="text" data-id={e.id} />
                                <div className="title">
                                    {e.number}: {e.text}
                                </div>
                                <FontAwesomeIcon
                                    icon={regular("pen-to-square")}
                                    onClick={() => {
                                        this.displayEdit(e);
                                    }}
                                    className="edit"
                                />
                                <FontAwesomeIcon
                                    className="delete"
                                    data-id={e.id}
                                    icon={solid("trash")}
                                    onClick={() => {
                                        deleteFunc(e.id);
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Overview;
