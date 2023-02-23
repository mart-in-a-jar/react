import { Component } from "react";
import Counter from "./Counter";

export default class CounterParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 40,
            showErrorComponent: false,
        };
        this.mountCounter = () => this.setState({ mount: true });
        this.unMountCounter = () => this.setState({ mount: false });
        this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
        this.seedGenerator = () =>
            this.setState({ seed: Number.parseInt(Math.random() * 100) });
        this.toggleError = () =>
            this.setState({
                showErrorComponent: !this.state.showErrorComponent,
            });
    }

    render() {
        return (
            <div className="counterParent">
                <h1>Lifecycle methods:</h1>
                <button onClick={this.mountCounter} disabled={this.state.mount}>
                    Mount counter
                </button>
                <button
                    onClick={this.unMountCounter}
                    disabled={!this.state.mount}
                >
                    Unmount counter
                </button>
                <button onClick={this.ignoreProp}>Ignore prop</button>
                <button onClick={this.seedGenerator}>Generate seed</button>
                <button onClick={this.toggleError}>Toggle error</button>
                {this.state.mount && (
                    <Counter
                        ignoreProp={this.state.ignoreProp}
                        seed={this.state.seed}
                        showErrorComponent={this.state.showErrorComponent}
                    />
                )}
            </div>
        );
    }
}
