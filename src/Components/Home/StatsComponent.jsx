import { Stack, Typography } from "@mui/material";
import React from "react";

// type Props = {
//   stats: string;
//   statsLabel: string;
// };

const StatsComponent = (props) => {
  return (
    <Stack id="stats-component">
      <Typography >{props.stats}</Typography>
      <Typography >{props.statsLabel}</Typography>
    </Stack>
  );
};

export default StatsComponent;