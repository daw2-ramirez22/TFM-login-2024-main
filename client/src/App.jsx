import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import HomePage from "./pages/HomePage.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import { TaskProvider } from "./context/TasksContext.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
    return (
       <AuthProvider>
            <TaskProvider>
                <BrowserRouter>
                    <main className="container mx-auto px-10">
                        <Navbar/>
                            <Routes>
                                <Route path="/" element={<HomePage></HomePage>}></Route>
                                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                                <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>  
                                <Route element={<ProtectedRoute></ProtectedRoute>}>
                                    <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
                                    <Route path="/add-task" element={<TaskFormPage></TaskFormPage>}></Route>
                                    <Route path="/task/:id" element={<TaskFormPage></TaskFormPage>}></Route>
                                    <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                                </Route>
                            </Routes>
                    </main>
                </BrowserRouter>
            </TaskProvider>
       </AuthProvider>
    )
}
export default App