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
                number: null,
            },
            tasks: [],
            numberOfTasks: 0,
        };

        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleInput(e) {
        this.setState((state) => {
            return {
                task: {
                    text: e.target.value,
                    id: state.task.id,
                    number: state.numberOfTasks + 1,
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
                    numberOfTasks: state.numberOfTasks + 1,
                };
            });
        }
        document.querySelector("input").focus();
    }

    deleteTask(taskID) {
        const newArr = [...this.state.tasks];
        let taskNo;
        for (let e of newArr) {
            if (e.id === taskID) {
                taskNo = newArr.indexOf(e);
                break;
            }
        }
        newArr.splice(taskNo, 1);
        this.setState({
            tasks: newArr,
        });
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
                <Overview tasks={tasks} deleteFunc={this.deleteTask} />
            </div>
        );
    }
}

// pass function to delete task to Overview

export default App;
