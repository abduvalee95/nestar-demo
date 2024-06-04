import { Box, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
    <Stack sx={{background:"#82c784"}}>Header</Stack>
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Popular Agents</Box>
        <Box>Top Agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
    </Stack>
  </Container>
    <Stack sx={{background:"#a1886f"}}>Footer</Stack>
  </>
  )

  

}
