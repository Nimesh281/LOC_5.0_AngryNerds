import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PhotographerCard from "./PhotographerCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: 0,
}));

export default function HirePhotographer() {
  return (
    <Box sx={{ flexGrow: 1, m: "0 auto ", width: "80%" }}>
      <Grid container spacing={5} rowSpacing={5}>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: "20px" }}>
          <Item>
            <PhotographerCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
