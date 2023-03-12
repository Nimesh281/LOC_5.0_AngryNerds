import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PhotographerCard from "./PhotographerCard";
import axios from "../../axios";
import { useState } from "react";
import { async } from "q";
import { useNavigate } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: 0,
}));

export default function HirePhotographer() {
  const navigate = useNavigate();


  const onClickHandler = (id)=>{
    navigate(
    '/Photographer/Profile',
     {state:{id:id }},
    );

  }


  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios({
      method: "GET",
      url: encodeURI("api/photographer/getAll"),
    }).catch((error) => console.log(error));

    if (response) {
      console.log(response.data);
      setData(response.data);
    }
  }

  React.useEffect(() => {
    getData();
  }, [])


  return (
    <Box sx={{ flexGrow: 1, m: "0 auto ", width: "80%" }}>
      <Grid container spacing={5} rowSpacing={5}>
        {data?.map((data) => {
          return <Grid onClick = {()=>{onClickHandler(data._id)}} item xs={4} sx={{ borderRadius: "20px" }}>
            <Item>
              <PhotographerCard data={data} />
            </Item>
          </Grid>
        })}

        {/* <Grid item xs={4} sx={{ borderRadius: "20px" }}>
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
        </Grid> */}
      </Grid>
    </Box>
  );
}
