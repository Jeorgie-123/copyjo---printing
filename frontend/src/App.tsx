import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPageAdmin from './pages/LoginPageAdmin'

const App: React.FC = () =>  {

  const location = useLocation();
  const hideNavbar:boolean = location.pathname === '/login-admin'
 
  return (
    <div>
      {!hideNavbar && <Navbar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/login-admin"  element={<LoginPageAdmin/>}/>
      </Routes>
    </div>
 
  )
}

export default App
