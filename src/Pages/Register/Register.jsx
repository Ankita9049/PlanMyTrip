import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
       
        role: "USER"
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            await registerUser(formData);

            alert("Registration Successful!");

            navigate("/login");

        } catch(error) {

            console.error(error);

            if(error.response){
                alert(error.response.data);
            }
            else{
                alert("Unable to connect to server.");
            }

        }

    };


    return (

        <div className="register-page">

            <div className="register-card">


                <h2>Create Account ✈️</h2>

                <p>Join PlanMyTrip and start exploring.</p>


                <form onSubmit={handleRegister}>


                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />


                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />


                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />




                    {/* Role Selection */}

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >

                        <option value="USER">
                            Traveller
                        </option>

                        <option value="GUIDE">
                            Guide
                        </option>

                    </select>



                    <button type="submit">
                        Register
                    </button>


                </form>


                <p className="login-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>


            </div>

        </div>

    );
}


export default Register;