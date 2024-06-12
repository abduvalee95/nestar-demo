import { FavoriteOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"

import Link from "next/link";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/property/detail",
            query: { id: "test12345634" },
          }}
        >
          <img src={imagePath} alt="" />
        </Link>
        <Box className={"top-badge"}>
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography> TOP </Typography>
        </Box>
        <Box className="price-box">
          <Typography>$ 250000 </Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-adress">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test12345634" },
              }}
            >
              <Typography>Kingston Apartments </Typography>
            </Link>
          </Stack>
          <Stack className="adress">
            <Typography>Seoul, Namsan Center 300-2 </Typography>
          </Stack>
        </Stack>
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>2 Bed</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />
            <Typography>2 room</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />
            <Typography>170 m2</Typography>
          </Stack>
        </Stack>
        <Stack className="divider"></Stack>
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className="buttons">
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
            <IconButton>
              <FavoriteOutlined />
            </IconButton>
            <Typography className="view-cnt">20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
