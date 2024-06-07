import React from "react";
import { Box, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HeaderFilter = () => {
  return (
    <>
      <Stack className={"search-box"}>
        <Stack className={"select-box"}>
          <Box component={"div"} className={"box on"}>
            <span> Location</span>
            <ExpandMoreIcon />
          </Box>
          <Box className={"box"}>
            <span> Property Type</span>
            <ExpandMoreIcon />
          </Box>
          <Box className={"box"}>
            <span> 7 Rooms</span>
            <ExpandMoreIcon />
          </Box>
        </Stack>
        <Stack className={"search-box-other"}>
          <Box className={"advanced-filter"}>
            <img src="/img/icons/tune.svg" alt="" />
            <span> Advanced </span>
          </Box>
          <Box className={"search-btn"}>
            <img src="/img/icons/search_white.svg" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderFilter;
