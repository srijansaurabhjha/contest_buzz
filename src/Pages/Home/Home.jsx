import {
  Box,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { darkModeContext } from "../../App";
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [codeForcesFlag, setCodeForcesFlag] = useState(true);
  const [leetcodeFlag, setLeetcodeFlag] = useState(true);
  const [codeChefFlag, setCodeChefFlag] = useState(true);
  const [atCoderFlag, setAtCoderFlag] = useState(true);
  const [is24,setIs24]=useState(false);

  const [contest, setContest] = useState([]);

  const {darkMode,setDarkMode}=useContext(darkModeContext);

// Fetching the contests
  const fetchContest = async () => {
    setLoading(true);
    var newArr = [];

    if (codeForcesFlag) {
      const cfList = await axios.get("https://kontests.net/api/v1/codeforces");
      const cfListData = cfList.data;

      //appending a new property site at each index
      cfListData.forEach((elem) => {
        elem.site = "Codeforces";
      });

      for (let i = 0; i < cfListData.length; i = i + 1) {
        newArr.push(cfListData[i]);
      }
    }

    if (leetcodeFlag) {
      const lcList = await axios.get("https://kontests.net/api/v1/leet_code");
      const lcListData = lcList.data;
      //appending a new property site at each index

      lcListData.forEach((elem) => {
        elem.site = "Leetcode";
      });

      for (let i = 0; i < lcListData.length; i = i + 1) {
        newArr.push(lcListData[i]);
      }
    }

    if (codeChefFlag) {
      const ccList = await axios.get("https://kontests.net/api/v1/code_chef");
      const ccListData = ccList.data;

      ccListData.forEach((elem) => {
        elem.site = "CodeChef";
      });

      for (let i = 0; i < ccListData.length; i = i + 1) {
        newArr.push(ccListData[i]);
      }
    }

    if (atCoderFlag) {
      const atCoder = await axios.get("https://kontests.net/api/v1/at_coder");
      const atCoderData = atCoder.data;

      //appending a new property site at each index

      atCoderData.forEach((elem) => {
        elem.site = "AtCoder";
      });

      for (let i = 0; i < atCoderData.length; i = i + 1) {
        newArr.push(atCoderData[i]);
      }
    }

    //removing all which are not in 24 deadline
    if(is24){
      var tempArr=newArr;
      newArr=[];
      for(let i=0;i<tempArr.length;i=i+1){
        if(tempArr[i].in_24_hours==="Yes"){
           newArr.push(tempArr[i]);
        }
      }
    }

    if(newArr.length===0){
      setContest([]);
      setLoading(false);
      return;
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //adding a formattArray to newArr
    newArr.forEach((element)=>{
      const d=new Date(element.start_time.substring(0,10));
      element.formatTime=element.start_time.substring(0,10)+" | "+element.start_time.substring(12,19)+" | "+(days[d.getDay()]);
    })

    //adding a formatted duration to newArr
    newArr.forEach((element)=>{
       element.formatDuration = new Date(element.duration*1000).toISOString().substring(11,19);
       if(element.formatDuration==="00:00:00"){
         element.formatDuration="NA"
       }
      //  console.log(element.formatDuration);
    }) 

    newArr.sort(function(x,y){
      //x-y==-1 //ascending order sort
       return new Date((x.start_time.substring(0,10)+" "+x.start_time.substring(12,19)))-new Date((y.start_time.substring(0,10)+" "+y.start_time.substring(12,19)));
    })

    setContest(newArr);

    setLoading(false);
  };

  useEffect(() => {
    fetchContest();
  }, [codeForcesFlag, leetcodeFlag, codeChefFlag, atCoderFlag,is24]);

  const handleChangeCodeForces = () => {
    if (codeForcesFlag) setCodeForcesFlag(false);
    else setCodeForcesFlag(true);
  };

  const handleChangeleetCode = () => {
    if (leetcodeFlag) setLeetcodeFlag(false);
    else setLeetcodeFlag(true);
  };

  const handleChangecodeChef = () => {
    if (codeChefFlag) setCodeChefFlag(false);
    else setCodeChefFlag(true);
  };

  const handleChangeatCoder = () => {
    if (atCoderFlag) setAtCoderFlag(false);
    else setAtCoderFlag(true);
  };

  const handleChangeis24=()=>{
    if(is24){
      setIs24(false);
    }
    else{
      setIs24(true);
    } 
  }

  return (
    <TableContainer
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Switch color={darkMode?"secondary":"primary"} onChange={handleChangeCodeForces} defaultChecked />
          <Typography sx={{ alignSelf: "center", color:darkMode?"#3C486B":"#001C30",fontSize:'1.3rem',fontFamily:"'Roboto Slab', serif",fontWeight:600,letterSpacing:'0.1rem'}}>
            Codeforces
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Switch color={darkMode?"secondary":"primary"} onChange={handleChangeleetCode} defaultChecked />
          <Typography sx={{ alignSelf: "center", color:darkMode?"#3C486B":"#001C30",fontSize:'1.3rem',fontFamily:"'Roboto Slab', serif",fontWeight:600,letterSpacing:'0.1rem'}}>
            Leetcode
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Switch color={darkMode?"secondary":"primary"} onChange={handleChangecodeChef} defaultChecked />
          <Typography sx={{ alignSelf: "center", color:darkMode?"#3C486B":"#001C30",fontSize:'1.3rem',fontFamily:"'Roboto Slab', serif",fontWeight:600,letterSpacing:'0.1rem'}}>
            Codechef
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Switch color={darkMode?"secondary":"primary"} onChange={handleChangeatCoder} defaultChecked />
          <Typography sx={{ alignSelf: "center", color:darkMode?"#3C486B":"#001C30",fontSize:'1.3rem',fontFamily:"'Roboto Slab', serif",fontWeight:600,letterSpacing:'0.1rem'}}>
            AtCoder
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Switch color={darkMode?"secondary":"primary"} onChange={handleChangeis24} />
          <Typography sx={{ alignSelf: "center", color:darkMode?"#3C486B":"#001C30",fontSize:'1.3rem',fontFamily:"'Roboto Slab', serif",fontWeight:600,letterSpacing:'0.1rem'}}>
            In 24 Hours
          </Typography>
        </Box>
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Table
          sx={{
            width: "70%",
            marginTop: "2rem",
            marginBottom: "2rem",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <TableHead
            sx={{
              backgroundColor: darkMode?'#404258':"#FA9884",
              borderBottom: "2px solid #B3E5BE",
            }}
          >
            <TableRow>
              <TableCell sx={{color:darkMode?'#D8D8D8':'#393646',fontWeight:darkMode?'500':'600',fontSize:'1rem',fontFamily:"'Roboto Slab', serif",letterSpacing:'0.1rem'}}>Contest Name</TableCell>
              <TableCell sx={{color:darkMode?'#D8D8D8':'#393646',fontWeight:darkMode?'500':'600',fontSize:'1rem',fontFamily:"'Roboto Slab', serif",letterSpacing:'0.1rem'}} align="right">Platform</TableCell>
              <TableCell sx={{color:darkMode?'#D8D8D8':'#393646',fontWeight:darkMode?'500':'600',fontSize:'1rem',fontFamily:"'Roboto Slab', serif",letterSpacing:'0.1rem'}} align="right">Start Time</TableCell>
              <TableCell sx={{color:darkMode?'#D8D8D8':'#393646',fontWeight:darkMode?'500':'600',fontSize:'1rem',fontFamily:"'Roboto Slab', serif",letterSpacing:'0.1rem'}} align="right">Duration</TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: darkMode?"#222831":"#CBE4DE" }}>
            {contest?.map((c) => (
              <TableRow key={c.name}>
                <TableCell component="th" scope="row">
                  <Link
                    to={c.url}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: darkMode?"#DDDDDD":"#393053",
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: "600",
                      letterSpacing: "0.08rem",
                    }}
                  >
                    {c.name}
                  </Link>
                </TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans', sans-serif", fontWeight: "600",color:darkMode?'#FFD369':'#B04759'}} align="right">{c.site}</TableCell>
                <TableCell align="right" sx={{color:darkMode?'#F1D4D4':'#222831',fontFamily:"'Noto Sans', sans-serif",fontWeight:darkMode?"500":"600"}}>{c.formatTime}</TableCell>
                <TableCell align="right" sx={{color:darkMode?'#F1EBBB':'#222831'}}>{c.formatDuration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default Home;
