import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello this is Hook");
  return (
    <di v>
      This is Comiunity{" "}
      <button onClick={() => alert("Hello MIT 8")} style={{ margin: "20px" }}>
        {" "}
        Press Me{" "}
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);

//pages router tizimini ishlatishimizni sababi kop companylar aynan pages routerda ishledi
// mobile web boladi shuni qaysi devicedan kiryatganligni bilish uchun hooklarni ishlatamiz
//action eventlar talab etiladi Ajail boladi
