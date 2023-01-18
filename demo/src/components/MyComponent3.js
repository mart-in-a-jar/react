import React from "react";

class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>
                This is <br />
                {Array.isArray(this.props.names)
                    ? this.props.names.map((e, i) => {
                          return (
                              "Name " +
                              (i + 1) +
                              ": " +
                              e +
                              (i !== this.props.names.length - 1 ? ", " : "")
                          );
                      })
                    : this.props.names}
            </h3>
        );
    }
}

MyComponent3.defaultProps = {
    names: ["Nols", "Pols", "Døls"],
};

export default MyComponent3;
