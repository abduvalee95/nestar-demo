import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState("hello");
  return (
    <div>
      Community{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>{" "}
    </div>
  );
};

export default withLayoutBasic(Community);

//pages router tizimini ishlatishimizni sababi kop companylar aynan pages routerda ishledi
// mobile web boladi shuni qaysi devicedan kiryatganligni bilish uchun hooklarni ishlatamiz
//action eventlar talab etiladi Ajail boladi
