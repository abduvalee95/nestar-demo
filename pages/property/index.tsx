import withLayoutBasic from "@/libs/components/layout/LayoutBasic"
import { Container } from "@mui/material"
import { NextPage } from "next"

const PropertyList: NextPage = () => {
  console.log("Document - page route")
  return (
  
      <Container> Property List</Container>
    
    )
}
export default withLayoutBasic(PropertyList)