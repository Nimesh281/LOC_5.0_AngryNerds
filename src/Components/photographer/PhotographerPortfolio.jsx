import { Image } from "@mui/icons-material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../Common/Navbar";
import PhotographerCard from "../Home/PhotographerCard";
import ProfileCard from "./ProfileCard";
import image from "../../assets/images/logo.svg";
import { Typography } from "@mui/material";

function PhotographerPortfolio() {
  return (
    <>
      <Navbar />
      <Box>
        <ProfileCard/>
      </Box>
    </>
  );
}

export default PhotographerPortfolio;
