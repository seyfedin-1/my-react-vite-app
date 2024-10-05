import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
// import AdminLogin from './components/AdminLogin';
import Home from './components/home';

import ContactUs from './components/contuctus';
import AboutUs from './components/aboutus';
import Team from './components/Team';

function App() {
  return (
    <>
      <Router>
                <Layout>
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/user-dashboard" element={<UserPage />} />
                    <Route path="/admin-dashboard" element={<AdminPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/team" element={<Team />} />

                </Routes>
                </Layout>
        </Router>
    </>
  )
}

export default App
