import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Pages/Home/landingPage';

function App() {
    return (
        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/home" element={<Home />} />


        </Routes>
        </BrowserRouter>
    )
}

export default App;