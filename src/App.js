import logo from './logo.svg';
import './App.css';
import Header from './Sheard/Header/Header';
import { router } from './Routes/Routes';
import {RouterProvider} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Pages/AuthProvider/AuthProvider';


function App() {
  const {dark}=useContext(AuthContext)
  return (
    <div className={dark ? "bg-black" : "bg-white"}>
        
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
