import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function UserListPage() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Tracks the user being edited
    const [formData, setFormData] = useState({ name: '', email: '', location: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8081/api/users');
        const data = await response.json();
        setUsers(data);
    };

    const handleEditClick = (user) => {
        setEditingUser(user.id);
        setFormData({ name: user.name, email: user.email, location: user.location });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async () => {
        if (!editingUser) return;
    
        await fetch(`http://localhost:8081/api/users/${editingUser}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    
        setEditingUser(null);
        setFormData({ name: '', email: '', location: '' });
        fetchUsers(); // Re-fetch the users list
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8081/api/users/${id}`, {
            method: 'DELETE',
        });
        fetchUsers();
    };

    return (
        <div className="form-container">
            <h2>User Management System</h2>
            {editingUser ? (
                <div>
                    <h3>Edit User</h3>
                    <form>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleFormChange}
                            placeholder="Location"
                        />
                        <button type="button" onClick={handleUpdate}>Update</button>
                    </form>
                </div>
            ) : null}

            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.location}</td>
                            <td>
                                <button onClick={() => handleEditClick(user)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(user.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserListPage;
