import { useState, useEffect } from "react";

const Colors = () => {
    const [color, setColor] = useState("black");

    useEffect(() => {
        const changeColorOnClick = () => {
            if (color === "black") {
                setColor("red");
            } else {
                setColor("black");
            }
        };

        const myDiv = document.querySelector("#myDiv");

        myDiv.addEventListener("click", changeColorOnClick);

        return () => {
            myDiv.removeEventListener("click", changeColorOnClick);
        };
    }, [color]);

    return (
        <div>
            <div
                id="myDiv"
                style={{
                    color: "white",
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    backgroundColor: color,
                    userSelect: "none",
                }}
            >
                This div can change color. Click on me!
            </div>
        </div>
    );
};

export default Colors;
