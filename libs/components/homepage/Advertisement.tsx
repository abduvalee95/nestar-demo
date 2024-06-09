import { Stack } from "@mui/material";
import React from "react";

const Advertisement = () => {
  return (
    <Stack className="video-frame">
          <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: "100%", height: "100%",objectFit:"cover"}}
              src="/video/ads.mov" >
                <source  src="/video/ads.mov" type="video/mp4" />
              </video>
    </Stack>
  );
};


export default Advertisement