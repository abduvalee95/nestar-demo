import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack } from "@mui/material";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";

const PopularProperties = ({ initialInput, ...props }: any) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput);

  return (
    <Stack className="popular-properties">
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span> Popular Properties </span>
            <p>Popular is based on likes</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <Link href={"/property"}>
                {" "}
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}> Popular Empty</Box>
          ) : (
            <Swiper
              className="popular-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className="popular-property-slide">
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

PopularProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6],
};
export default PopularProperties;
