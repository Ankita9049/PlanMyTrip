import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/UserService";
import "./Profile.css";

function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!loggedInUser) {
            navigate("/login");
            return;
        }

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const data = await getUserById(loggedInUser.userId);

            setUser(data);

        } catch (error) {

            console.error(error);
            alert("Unable to load profile");

        }

    };

    if (!user) {

        return (

            <div className="container mt-5 text-center">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

        <div className="container mt-5">

            <div className="profile-card">

                <div className="text-center">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile"
                        className="profile-image"
                    />

                    <h2>{user.name}</h2>

                </div>

                <hr />

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Role:</strong> {user.role}
                </p>

            </div>

        </div>

    );

}

export default Profile;