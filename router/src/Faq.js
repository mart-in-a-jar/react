import { useEffect } from "react";

function Faq() {
    useEffect(() => {
        document.title = "FAQ";
    }, []);
    return (
        <div>
            <h1>Hello from Faq</h1>
        </div>
    );
}

export default Faq;
