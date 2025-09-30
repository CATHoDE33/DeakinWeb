import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import HomePage from './routes/HomePage'
import LoginPage from './routes/LoginPage'
import CreateAccountPage from './routes/CreateAccountPage'
import NewPostPage from './routes/NewPostPage'

function App() {
    return (
        <div className="app-container">
            <NavigationBar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/createaccount" element={<CreateAccountPage />} />
                    <Route path="/newpost" element={<NewPostPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;