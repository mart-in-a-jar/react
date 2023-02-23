import { Component } from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends Component {
    constructor(props) {
        console.log("Constructor");
        super(props);

        this.state = {
            counter: 0,
            seed: 0,
            initializing: true,
        };

        this.increment = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1,
                };
            });
        };

        this.decrement = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1,
                };
            });
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Get derived state from props");
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed,
            };
        }
        return null;
    }

    componentDidMount() {
        console.log("Component did mount");
        console.log("-".repeat(20));
        // simulate getting data from api:
        setTimeout(() => {
            this.setState({ initializing: false });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        // if ignoreProp changed, do not update
        if (
            nextProps.ignoreProp &&
            this.props.ignoreProp !== nextProps.ignoreProp
        ) {
            console.log("Should component update? DO NOT RENDER");
            console.log("-".repeat(20));
            return false;
        }
        console.log("Should component update? RENDER");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get snapshot before update");
        // Kan f.eks. sjekke hvor musepeker var etc. for så å hente det ut og håndtere det i componentDidUpdate
        return null;
    }

    render() {
        console.log("Render");

        if (this.state.initializing) {
            return <div>Initializing...</div>;
        }

        if (this.props.showErrorComponent && this.state.error) {
            return (
                <div>
                    We have encountered an error! {this.state.error.message}
                </div>
            );
        }
        return (
            <div className="counter">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div>Counter: {this.state.counter}</div>
                {/* {this.props.showErrorComponent && <ErrorComponent />} */}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update");
        console.log("-".repeat(20));
    }

    componentWillUnmount() {
        console.log("Component will unmount");
        console.log("-".repeat(20));
    }

    componentDidCatch(error, info) {
        console.log("Component did catch");
        this.setState({ error, info });
    }
}
