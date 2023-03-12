import { Image } from "@mui/icons-material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../Common/Navbar";
import PhotographerCard from "../Home/PhotographerCard";
import ProfileCard from "./ProfileCard";
import image from "../../assets/images/logo.svg";
import { Typography } from "@mui/material";
import ProfilePage from "../Profile/ProfilePage";

function PhotographerPortfolio() {
  return (
    <>
      <Navbar />
      <Box>
        <ProfilePage/>
      </Box>
    </>
  );
}

export default PhotographerPortfolio;
