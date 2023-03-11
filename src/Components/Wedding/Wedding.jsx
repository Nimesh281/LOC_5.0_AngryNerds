import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../Common/Navbar";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ImageListCustom from "./ImageListCustom";
import "../../../src/App.css";
import WeddingMaps from "./WeddingMaps";
import LocationMap from "./LocationMap";

const locations = [
    {
      name: 'Golden Gate Bridge',
      coordinates: { lat: 37.8199, lng: -122.4783 }
    },
    {
      name: 'Alcatraz Island',
      coordinates: { lat: 37.8267, lng: -122.4233 }
    },
    {
      name: 'Fisherman\'s Wharf',
      coordinates: { lat: 37.8087, lng: -122.4105 }
    }
  ];

function Wedding() {
  return (
    <>
      <Navbar />
      <Typography variant="h3" sx={{ mt: 4 ,display:"flex",justifyContent:"center"}}>
        WEDDING
      </Typography>
      <Typography sx={{ m: 1, mb: 5 ,display:"flex",justifyContent:"center"}}>
        Make sure the moment of a lifetime is captured for eternity
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          pl: 20,
          backgroundColor: "#F6F8F9",
        }}
      >
        <Typography variant="h4" sx={{ m: 2 }}>
          Pricing Plans
        </Typography>
        <Typography varinat="h5" sx={{ m: 2 }}>
          Plans at a bargain 🤑 price, no need of a second opinion. 100% refunds
          on cancellation within 48 hrs of booking*.
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            width: "80%",
            borderRadius: "1rem",
            mx: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 10,
              mb: 3,
            }}
          >
            <Typography variant="h4" sx={{ mt: 4 }}>
              Get Custom Pricing.
            </Typography>
            <Button
              sx={{ p: 2, mt: 4, backgroundColor: "#e85a4f", color: "white" }}
              startIcon={<ModeCommentRoundedIcon />}
            >
              Enquire Now !
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 10,
              my: 1,
            }}
          >
            <Typography variant="h4">Grand Wedding.</Typography>
            <Typography variant="h4">1,00,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 10,
              my: 1,
            }}
          >
            <Typography variant="h4">One Day Wedding.</Typography>
            <Typography variant="h4">1,00,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 10,
              my: 1,
            }}
          >
            <Typography variant="h4">Luxury Package.</Typography>
            <Typography variant="h4">1,00,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 10,
              my: 1,
            }}
          >
            <Typography variant="h4">Celebrity Package.</Typography>
            <Typography variant="h4">1,00,000</Typography>
          </Box>
        </Box>
        <Typography variant="h5" sx={{ mx: 10, mt: 10 }}>
          Ideas For Photoshoot.
        </Typography>
        <Typography variant="h6" sx={{ mx: 10, mb: 10 }}>
          Some ideas 🤩 to inspire you, see how we have shot these high quality
          pictures -.
        </Typography>

        <ImageListCustom />

        <Typography variant="h5" sx={{ mx: 10, mt: 10 }}>
        Cities Available.
        </Typography>
        <Typography variant="h6" sx={{ mx: 10, mb: 10 }}>
        Currently we are available 🤘 in the following cities:
        </Typography>
        <LocationMap locations={locations}/>
      </Box>
    </>
  );
}

export default Wedding;
