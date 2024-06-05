import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#82c784" }}> Header Home </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#a1886f" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
