import { useState } from "react"

const Community = () => {
    const [title, setTitle] = useState<string>("hello this is Hook")
    return <div > COMMUNITY
    <button onClick={()=>alert("Hello MIT 8")} style={{margin:'20px'}}> Press Me </button>
    </div>
}

export default Community


//pages router tizimini ishlatishimizni sababi kop companylar aynan pages routerda ishledi 
// mobile web boladi shuni qaysi devicedan kiryatganligni bilish uchun hooklarni ishlatamiz
//action eventlar talab etiladi Ajail boladi  