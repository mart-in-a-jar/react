import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import Clock from "./components/Clock";
import MyComponent3 from "./components/MyComponent3";
import "./App.css";
import CounterParent from "./components/CounterParent";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.onClickBtn = this.onClickBtn.bind(this);
        this.countUp = this.countUp.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    onClickBtn(e) {
        this.printStats(e);
        this.countUp();
    }

    printStats(e) {
        console.log(`${e.target.classList} has beed clicked!`);
        // console.log(this);
    }

    countUp() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    resetCount() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MyComponent
                    title="React"
                    onButtonClicked={this.onClickBtn}
                    countNumber={this.state.count}
                />
                <button onClick={this.resetCount}>Reset</button>
                <br />
                <br />
                <MyComponent2 title="Function component =)" />
                <br />
                <br />
                <Clock />
                <p>Default props:</p>
                <MyComponent3 />
                <p>Custom props:</p>
                <MyComponent3 names="Nombre" />
                <p>Map array of elements to component:</p>
                {arr.map((e) => {
                    return <MyComponent2 key={arr.indexOf(e)} title={e} />;
                })}
                <CounterParent />
            </div>
        );
    }
}

const arr = [1, "to", "tre", 4];

export default App;
