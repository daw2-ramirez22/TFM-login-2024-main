import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
    return (
       <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>}></Route>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
                    <Route path="/tasks" element={<h1>Task Page</h1>}></Route>
                    <Route path="/add-task" element={<h1>New Task</h1>}></Route>
                    <Route path="/task/:id" element={<h1>Update Task</h1>}></Route>
                    <Route path="/profile" element={<h1>Profile</h1>}></Route>
                </Routes>
            </BrowserRouter>
       </AuthProvider>
    )
}
export default App