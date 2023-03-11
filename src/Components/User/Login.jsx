import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "../../axios"
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
       
        const body = {
            email:email,
            password:password
        }

        const response = await axios({
            method: "POST",
            url: encodeURI("api/user/login"),
            data: body,
          }).catch((error) => console.log(error));

          if(response){
            console.log(response.data? response.data : response.error);
            sessionStorage.setItem("User Data", JSON.stringify(response.data));
            navigate("/home" ,{replace:true });
          }
    }



  return (
   <Container  maxWidth="sm">
      <Box className="login-signup-container" sx={{display:"flex",flexdire:'row'}}>
        <Box
          sx={{
            backgroundColor: "#F1F3F6",
            my: 10,
            p: 10,
            borderRadius: "2rem",
          }}
        >
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
             Log in
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate("/register",{replace:true})}
              >
                 Dont have account? Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
