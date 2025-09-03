import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                  "x-api-key": "reqres-free-v1"
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful ✅");
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        setMessage(data.error || "Invalid credentials");
      }
    } catch (error) {
      setMessage("Network error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800"
          >
            Sign In
          </button>
          <Link to = "/ResetPassword" className="flex justify-center">Forgot Your Password?</Link>
          <div className="flex justify-center items-center">
            <p>Don't have an account?</p>
            <Link to = "/signup" className="text-blue-900">Signup</Link>
          </div>
          <Link to = "/#" className="flex justify-center text-blue-900">Back to home</Link>

        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
