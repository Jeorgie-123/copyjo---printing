import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPageAdmin from './pages/LoginPageAdmin'
import AdminDashbaord from './pages/AdminDashboard'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore'

const App: React.FC = () =>  {
  
  const {checkAuth, user, loading} = useAuthStore();
  const location = useLocation();

  const hideNavbar = ['/login-admin', '/dashboard'].includes(location.pathname);

  useEffect(() => {
    checkAuth()
  },[])

  console.log("The User is: ", user)

  if(loading){
    return <div>
      Loading.....
    </div>
  }
 
  return (
    <div>
      {!hideNavbar && <Navbar/>}
      <Routes>
        <Route path='/' element={!user ? <LandingPage/> : <Navigate to="/dashboard"/>}></Route>
        <Route path="/login-admin"  element={!user ? <LoginPageAdmin/> : <Navigate to="/dashboard"/>}/>
        <Route path='/dashboard' element={ user ? <AdminDashbaord/> : <Navigate to="/login-admin"/>}></Route>
      </Routes>
    </div>
 
  )
}

export default App
