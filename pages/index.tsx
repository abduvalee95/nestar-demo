import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
      <Stack className={"home-page"}>
        <Stack>
          <Stack className="container">Trend Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Popular Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Advertisement</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
  );
};

export default withLayoutMain(Home);
