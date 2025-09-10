import React, { useState } from "react";
import { Link } from "react-router-dom";




const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      console.log("Sending payload:", {
  email: formData.email,
  password: formData.password,
});

      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                    "x-api-key": "reqres-free-v1"
        },

        body: JSON.stringify({
          
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log("Raw response:", response); // 👀 Debug line


      const data = await response.json();
      console.log("Response JSON:", data); // 👀 Debug line

      if (response.ok) {
        setMessage("Account created successfully ✅");
        window.location.href = "/dashboard";
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Catch block error:", error); // 👀 Debug line
      setMessage("Network error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
        <p className="text-center mb-6 text-gray-600">
          Join NextGen Academy and start learning today
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800"
          >
            Create Account
          </button>
          <div className="flex justify-center items-center">
           <p>Already have an account?</p>
           < Link to ="/login" className="text-blue-900">Sign in</Link>
          </div>
          <Link to ="/#" className="flex justify-center text-blue-900">Back to Home</Link>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
