import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkModeContext } from '../../App';

const Navbar = () => {

  const {darkMode,setDarkMode}=useContext(darkModeContext);

  return (
    <Box sx={{display:'flex',height:'10vh',alignItems:'center',justifyContent:'center',backgroundColor:!darkMode?'#E8A0BF':"#212A3E"}}>
      <Box sx={{flex:'3',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRL5Xn_k9sQVjKO-ebPJTaBHxtBbPHvUUJwPQlzo7QMyshahSCSJKOUl1jrsFGOzpcH9Y&usqp=CAU"  alt="#" className='logo'/>
        <Typography sx={{marginLeft:'1rem',fontFamily:"'Roboto Slab', serif",fontWeight:darkMode?'500':'600',letterSpacing:'0.1rem',fontSize:'1.2rem',color:darkMode?'#FFF4F4':'#2B2730'}}>ContestBuzz</Typography>
      </Box>
      <Box sx={{flex:'6',display:'flex',justifyContent:'center'}}>
          <Link style={{color:darkMode?"#ECF8F9":"#212A3E"}} className='link' to="/">HOME</Link>
          <Link style={{color:darkMode?"#ECF8F9":"#212A3E"}} className='link' to="/about">ABOUT</Link>
      </Box>
      <Box sx={{flex:'3',display:'flex',justifyContent:'center'}}>
        <IconButton sx={{backgroundColor:'#F1F6F9','&:hover':{backgroundColor:darkMode?'white':'black',color:darkMode?'black':'white'}}} onClick={()=>{setDarkMode(!darkMode);}}>
            <DarkModeIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Navbar
