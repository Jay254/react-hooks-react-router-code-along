import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Messages from './Messages';
import NavBar from './NavBar';

function App() {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
        </div>
    )
}

export default App;