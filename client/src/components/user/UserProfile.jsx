// components/UserProfile.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    username: user?.username || "",
    email: user?.email || "",
    address: user?.address || "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Simulate profile update
    setMessage("Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-2xl font-bold">
          You need to login to view your profile.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
