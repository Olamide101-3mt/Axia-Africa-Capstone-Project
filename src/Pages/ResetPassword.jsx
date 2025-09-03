import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fake API call simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Password reset link sent to your email ✅ (Demo only)");
    } catch (error) {
      setMessage("Error sending reset link");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
