import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  return (
    <div style={{margin: "20px 0"}}>
      <Stack className="container"> Community </Stack>
    </div>
  );
};

export default withLayoutBasic(Community);

//pages router tizimini ishlatishimizni sababi kop companylar aynan pages routerda ishledi
// mobile web boladi shuni qaysi devicedan kiryatganligni bilish uchun hooklarni ishlatamiz
//action eventlar talab etiladi Ajail boladi
