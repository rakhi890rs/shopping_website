// src/pages/users/ProfileUser.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asynclogoutuser } from '../../store/action/userAction';
import { loadUser } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axiosconfig';

const ProfileUser = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    password: ''
  });

  if (!user) {
    return <p className="p-10 text-center">Please login to view your profile.</p>;
  }

  const handleLogout = () => {
    dispatch(asynclogoutuser());
    dispatch(loadUser(null));
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { ...formData };
      // Optionally, remove empty password
      if (!updatedUser.password) delete updatedUser.password;

      const res = await axios.put(`/users/${user.id}`, updatedUser);
      dispatch(loadUser(res.data)); // Update redux store
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-10 border rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      {!editMode ? (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.isAdmin ? "Admin" : "User"}</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-800 text-white rounded"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-800 text-white rounded"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password (optional)"
            className="border p-2 rounded"
          />
          <div className="flex gap-4">
            <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded">
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileUser;
