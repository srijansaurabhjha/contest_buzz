import React from 'react'
import './about.css';
import { Avatar, Box, Typography } from '@mui/material';

import photo from '../../images/Photo.jpg';

const About = () => {
  return (
    <Box sx={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>

        <Box sx={{backgroundColor:'whitesmoke',padding:'1rem',width:'33%',minHeight:'45vh',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <Typography sx={{textAlign:'center',fontWeight:'600',fontSize:'3rem',fontFamily: "'Roboto Slab', serif",letterSpacing:'0.1rem'}}>
            What this site does?
          </Typography>
          <Typography sx={{textAlign:'center',color:'gray'}}>
            All CS enthusiasts need this
          </Typography>
          <hr/>
          <Typography sx={{fontSize:'2rem',marginTop:'1rem'}}>
          This site brings all running and future contests between your hands 🤝  from many different online judges.
          </Typography>
        </Box>

        <Box sx={{backgroundColor:'whitesmoke',width:'50%',padding:'1rem',minHeight:'45vh',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <Typography sx={{textAlign:'center',fontWeight:'600',fontSize:'3rem',fontFamily: "'Roboto Slab', serif",letterSpacing:'0.1rem'}}>How Am I?</Typography>
          <Typography  sx={{textAlign:'center',color:'gray'}}>Human Lol 😛</Typography>
          <hr/>
           <Box sx={{display:'flex'}}>
            <Box sx={{flex:3}}>
               <Avatar src={photo} alt="#" sx={{margin:'auto',height:'20vh',width:'20vh',marginTop:'1rem',marginBottom:'1rem'}}/>
                <Typography sx={{textAlign:'center',color:'GrayText',fontFamily:"'Raleway', sans-serif",fontWeight:'600',fontSize:'1.2rem'}}>Srijan Saurabh Jha</Typography>
            </Box>
            <Box sx={{flex:6,marginTop:'2rem'}}>
                  <Typography sx={{fontSize:'1.40rem'}}>I am a BTech (Computer Science) student and a fellow tech enthusiast. I also give a lot of contest on different platforms. During my journey , I realised that there is a need of a common platform that reminds me about upcoming contests. So came up this idea. Hope this helps. :)</Typography>
            </Box>

           </Box>
        </Box>

    </Box>
  )
}

export default About
