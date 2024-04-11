
import { useEffect } from 'react';
import './App.css'
import authService from './appwrite/auth'
import {useDispatch} from 'react-redux'
import { login, logout } from './store/authSlice';
import { useState } from 'react';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom'



function App() {
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();

  

 
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        <div className="w-full block">
            <Footer />
        </div>
    </div>
)
}

export default App
