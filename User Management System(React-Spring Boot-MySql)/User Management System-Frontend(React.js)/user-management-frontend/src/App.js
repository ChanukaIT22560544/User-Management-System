import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddUserPage from './pages/AddUserPage';
import UserListPage from './pages/UserListPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<UserListPage />} />
                <Route path="/add-user" element={<AddUserPage />} />
                <Route path="/user-list" element={<UserListPage />} />
            </Routes>
        </Router>
    );
};

export default App;
