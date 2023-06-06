import { useState } from "react";

export default function App2() {
    const [heading, setHeading] = useState("Magnificent Monkeys");

    const clickHandler = () => {
        setHeading("Radical Rhinos");
    };

    return (
        <>
            <button type="button" onClick={clickHandler}>
                Click Me
            </button>
            <h1>{heading}</h1>
        </>
    );
}
