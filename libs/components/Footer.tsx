import {
  FacebookOutlined,
  FacebookSharp,
  Telegram,
  WhatsappOutlined,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import InstagrammIcon from "@mui/icons-material/Instagram";
import TelegrammIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack className={"footer-container"}>
      <Stack className={"main"}>
        <Stack className={"left"}>
          <Box component={"div"} className={"footer-box"}>
            <img src="/img/logo/logoWhite.svg" alt="" className={"logo"} />
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <span> Total Free Customer Care</span>
            <p> +82 10 34 43 42 44 </p>
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <span> Live </span>
            <p> +82 10 34 43 42 44 </p>
            <span> Need Support? </span>
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <p> Follow Us </p>
            <div className="media-box">
              <FacebookOutlined />
              <TelegrammIcon />
              <InstagrammIcon />
              <TwitterIcon />
              <WhatsappOutlined />
            </div>
          </Box>
        </Stack>

        <Stack className={"right"}>
          <Box component={"div"} className={"top"}>
            <strong> Keep yourself up to date</strong>
            <div>
              <input type="text" placeholder="Your Email" />
              <span> subscription </span>
            </div>
          </Box>
          <Box component={"div"} className="bottom">
            <div>
              <strong> Popular Search</strong>
              <span> Property for Rent</span>
              <span> Property Low To hide</span>
            </div>
            <div>
              <strong> Quick Links</strong>
              <span> Terms of Use</span>
              <span> Privacy Policy </span>
              <span> Pricing Plans </span>
              <span> Our Services </span>
              <span> Contact Support  </span>
              <span> FAQs</span>
            </div>
            <div>
              <strong> Discover </strong>
              <span> Seoul </span>
              <span> KangWon </span>
              <span> Degu </span>
              <span> Busan </span>
            </div>
          </Box>
        </Stack>
          </Stack>
          <Stack className="second">
              <span> & Nestar - All rights reserverd. Nestar 2024</span>
              <span> Privacy  Terms  Sitemap </span>
          </Stack>
    </Stack>
  );
};

export default Footer;
