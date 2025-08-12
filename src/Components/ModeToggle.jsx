import React, { useContext } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const ModeToggle = () => {
    const {darkMode,setDarkMode}=useContext(AuthContext)
    return (
        <div className='ml-3'>
            <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ? <IoSunnyOutline size={25} />:<FaMoon size={25} className='text-black'/>}</button>
        </div>
    );
};

export default ModeToggle;