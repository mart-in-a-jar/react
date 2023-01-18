import { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputText: "",
        };

        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleInput(e) {
        this.setState({
            inputText: e.target.value,
        });
    }

    handleEnter(e) {
        if (e.key === "Enter") this.addTask();
    }

    addTask() {
        if (this.state.inputText) {
            this.setState((state) => {
                return {
                    tasks: [...state.tasks, this.state.inputText],
                    inputText: "",
                };
            });
        }
        document.querySelector("input").focus();
    }

    render() {
        return (
            <div className="app">
                <input
                    autoFocus
                    type="text"
                    placeholder="Task..."
                    value={this.state.inputText}
                    onChange={this.handleInput}
                    onKeyDown={this.handleEnter}
                />
                <button type="submit" onClick={this.addTask}>
                    Add
                </button>
                <Overview tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
