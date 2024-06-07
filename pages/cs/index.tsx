import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  return (
    <div style={{margin: "20px 0"}}>
      <Stack className="container"> CS</Stack>
    </div>
  );
};

export default withLayoutBasic(CS);

//pages router tizimini ishlatishimizni sababi kop companylar aynan pages routerda ishledi
// mobile web boladi shuni qaysi devicedan kiryatganligni bilish uchun hooklarni ishlatamiz
//action eventlar talab etiladi Ajail boladi
