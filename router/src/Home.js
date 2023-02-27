import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <h1>Hello from Home</h1>
        </div>
    );
}

export default Home;
