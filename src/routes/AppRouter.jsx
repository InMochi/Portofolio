import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import Contact from '../pages/ContactPage';

function AppRouter() {
    return(
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
    )
}

export default AppRouter;