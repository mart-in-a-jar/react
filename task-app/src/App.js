import React, { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                text: "",
                id: uniqid("task_"),
            },
            tasks: [],
        };

        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleInput(e) {
        this.setState((state) => {
            return {
                task: {
                    text: e.target.value,
                    id: state.task.id,
                },
            };
        });
    }

    handleEnter(e) {
        if (e.key === "Enter") this.addTask(e);
    }

    addTask(e) {
        e.preventDefault();
        if (this.state.task.text) {
            this.setState((state) => {
                return {
                    task: {
                        text: "",
                        id: uniqid("task_"),
                    },
                    tasks: [...state.tasks, this.state.task],
                };
            });
        }
        document.querySelector("input").focus();
    }

    render() {
        const { task, tasks } = this.state;
        return (
            <div className="app">
                <form onSubmit={this.addTask}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        id="taskInput"
                        autoFocus
                        type="text"
                        placeholder="Task..."
                        value={task.text}
                        onChange={this.handleInput}
                        onKeyDown={this.handleEnter}
                    />
                    <button type="submit">Add</button>
                </form>
                <Overview tasks={tasks} />
            </div>
        );
    }
}

export default App;
