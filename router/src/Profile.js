import { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (
        <div>
            <h1>Hello from Profile</h1>
        </div>
    );
};

export default Profile;
