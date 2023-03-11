import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // handle login logic
    } else {
      // handle signup logic
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{backgroundColor:"#F1F3F6" ,my:10,p:10,borderRadius:'2rem' }}>
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {isLogin ? "Log in" : "Sign up"}
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isLogin && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? "Log in" : "Sign up"}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginSignupPage;
