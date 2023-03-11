import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "../../axios"
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[contact,setContact] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e)=>{
        e.preventDefault()
        const body = {
            name:name,
            email:email,
            contact:contact,
            password:password
        }

       
        const response = await axios({
            method: "POST",
            url: encodeURI("api/user/register"),
            data: body,
          }).catch((error) => console.log(error));

          if(response){
            console.log(response.data? response.data : response.error);
            // sessionStorage.setItem("User Data", JSON.stringify(response.data));
            navigate("/login" ,{replace:true });
          }
    }

    return (
        <Container maxWidth="sm">
            <Box className="login-signup-container" sx={{ display: "flex", flexdire: 'row' }}>
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
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}  autoComplete='off'>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                value={name}
                                inputProps={{
                                    autoComplete: 'off'
                                 }}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                inputProps={{
                                    autoComplete: 'off'
                                 }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="contact"
                                label="Contact"
                                autoComplete='off'
                                name="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete='off'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={()=>{navigate("/login",{replace:true})}}
                            >
                                "Already have an account? Log in"
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Register
