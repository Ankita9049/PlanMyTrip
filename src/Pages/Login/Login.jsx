import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser({
                email,
                password,
            });

            // Save JWT Token
            localStorage.setItem("token", response.token);

            // Save Logged-in User
            localStorage.setItem(
                "user",
                JSON.stringify(response.user)
            );

            alert("Login Successful");

            navigate("/");

        } catch (error) {

            console.error(error);

            if (error.response) {

                alert(error.response.data);

            } else {

                alert("Unable to connect to server.");

            }

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h2>Welcome Back 👋</h2>

                <p>Login to continue your journey</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;