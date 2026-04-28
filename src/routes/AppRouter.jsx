import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Contact from '../pages/Contact';

function AppRouter() {
    return(
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
    )
}

export default AppRouter;