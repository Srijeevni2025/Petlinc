import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LabList from './components/LabList.jsx'
import LabProfile from './components/LabProfile.jsx'
import MyProfile from './components/MyProfile.jsx'
import GroomingPackages from './pages/GroomingPackages'
import SignIn from './pages/Signin'
import Signup from './pages/Signup'
import BookingPage from './pages/BookingPage'
import GroomingCenterProfile from './pages/GroomingCenterProfile'
import GroomingCenterBooking from './pages/GroomingCenterBooking'
import Navbar from './components/Navbar'
import CheckoutPage from './pages/CheckoutPage'
import GroomerDashboard from './pages/GroomerDashboard'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './store/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Toaster} from "react-hot-toast"
import PetSection from './components/PetSection'
import ContextProvider from './store/context'
import BecomePartner from './pages/BecomePartner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client = {queryClient}>
  <ReactQueryDevtools initialIsOpen ={true}/>
  <ContextProvider>
  <BrowserRouter>
        
        <Routes>
          <Route element = {<Navbar/>}/>
          <Route path = "/" element = {<App/>}/>
          <Route path = "lablist" element = {<LabList/>}/>
          <Route path = "LabProfile" element = {<LabProfile/>}/>
          <Route path = "MyProfile" element = {<MyProfile/>}/>
          <Route path = "/grooming-packages" element = {<GroomingPackages/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/BookingPage" element = {<BookingPage/>}/>
          <Route path = "/GroomingCenterProfile" element = {<GroomingCenterProfile/>}/>
          <Route path = "/GroomingCenterBooking" element = {<GroomingCenterBooking/>}/>
          <Route path = "/CheckoutPage" element = {<CheckoutPage/>}/>
          <Route path = "/GroomerDashboard" element = {<GroomerDashboard/>}/>
          <Route path = "/MyProfile" element = {<MyProfile/>}/>
          <Route path = "/PetSection" element  ={<PetSection/>}/>
          <Route path = "/becomepartner" element = {<BecomePartner/>}/>
        </Routes>
        
    </BrowserRouter>
    </ContextProvider>
    <Toaster position = "top-center" gutter = {12}
      containerStyle = {{margin:"8px"}}
      toastOptions = {{
        success:{
          duration:1000
        },
        error:{
          duration:2000
        },
        style:{
          fontSize:'16px',
          
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor:"white",
          color:"orange"
        }
      }}
    />
    </QueryClientProvider>
  </StrictMode>
)
