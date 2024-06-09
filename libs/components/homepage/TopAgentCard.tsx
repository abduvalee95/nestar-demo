import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img src="/img/profile/girl.svg" alt="" />
      <strong>Jane</strong>
      <span> Agent</span>
    </Stack>
  );
};

export default TopAgentCard;
